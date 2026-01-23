const SW_VERSION = "2026-01-23-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (!event.data) {
    return;
  }

  if (event.data.type === "GET_VERSION") {
    event.ports?.[0]?.postMessage({ type: "SW_VERSION", version: SW_VERSION });
    return;
  }

  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
