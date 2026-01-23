"use client";

import { useEffect } from "react";

const SERVICE_WORKER_URL = "/service-worker.js";

async function cleanupOldRegistrations() {
  const registrations = await navigator.serviceWorker.getRegistrations();

  await Promise.all(
    registrations.map((registration) => {
      const scriptUrl =
        registration.active?.scriptURL ??
        registration.waiting?.scriptURL ??
        registration.installing?.scriptURL;

      if (!scriptUrl) {
        return undefined;
      }

      try {
        const { pathname } = new URL(scriptUrl);
        if (pathname !== SERVICE_WORKER_URL) {
          return registration.unregister();
        }
      } catch {
        return undefined;
      }

      return undefined;
    })
  );
}

async function registerServiceWorker() {
  await cleanupOldRegistrations();

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
