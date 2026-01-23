"use client";

import { useEffect } from "react";

const SERVICE_WORKER_URL = "/service-worker.js";
const SW_VERSION = "2026-01-23-v1";
const RESET_KEY = `sw-reset-${SW_VERSION}`;
const VERSION_TIMEOUT_MS = 800;

function getScriptUrl(registration: ServiceWorkerRegistration) {
  return (
    registration.active?.scriptURL ??
    registration.waiting?.scriptURL ??
    registration.installing?.scriptURL
  );
}

async function requestSwVersion(
  registration: ServiceWorkerRegistration
): Promise<string | null> {
  const worker =
    registration.active ?? registration.waiting ?? registration.installing;
  if (!worker) {
    return null;
  }

  return new Promise((resolve) => {
    const channel = new MessageChannel();
    const timeoutId = window.setTimeout(
      () => resolve(null),
      VERSION_TIMEOUT_MS
    );

    channel.port1.onmessage = (event) => {
      window.clearTimeout(timeoutId);
      resolve(event.data?.version ?? null);
    };

    worker.postMessage({ type: "GET_VERSION" }, [channel.port2]);
  });
}

async function clearCaches() {
  const cacheNames = await caches.keys();
  await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
}

async function cleanupLegacyRegistrations() {
  const registrations = await navigator.serviceWorker.getRegistrations();

  let didReset = false;

  for (const registration of registrations) {
    const scriptUrl = getScriptUrl(registration);
    const version = await requestSwVersion(registration);
    let hasDifferentScript = false;

    if (scriptUrl) {
      try {
        hasDifferentScript = new URL(scriptUrl).pathname !== SERVICE_WORKER_URL;
      } catch {
        hasDifferentScript = true;
      }
    }

    if (version !== SW_VERSION || hasDifferentScript) {
      await registration.unregister();
      didReset = true;
    }
  }

  if (didReset) {
    await clearCaches();
  }

  return didReset;
}

async function registerServiceWorker() {
  let hasReset = false;

  try {
    hasReset = localStorage.getItem(RESET_KEY) === "1";
  } catch {
    hasReset = false;
  }

  if (!hasReset) {
    const didReset = await cleanupLegacyRegistrations();
    if (didReset) {
      try {
        localStorage.setItem(RESET_KEY, "1");
      } catch {
        // Ignore storage write issues; reload still clears stale workers.
      }
      window.location.reload();
      return;
    }
  }

  const registration = await navigator.serviceWorker.register(
    SERVICE_WORKER_URL,
    {
      updateViaCache: "none",
    }
  );

  if (registration.waiting) {
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
  }

  registration.addEventListener("updatefound", () => {
    const installingWorker = registration.installing;
    if (!installingWorker) {
      return;
    }

    installingWorker.addEventListener("statechange", () => {
      if (installingWorker.state === "installed") {
        installingWorker.postMessage({ type: "SKIP_WAITING" });
      }
    });
  });

  await registration.update();
}

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    if (!("serviceWorker" in navigator)) {
      return;
    }

    const onLoad = () => {
      void registerServiceWorker().catch((error) => {
        console.warn("Service worker registration failed.", error);
      });
    };

    if (document.readyState === "complete") {
      onLoad();
      return;
    }

    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
