const baseUrl = process.argv[2];
if (!baseUrl) {
  throw new Error("Usage: node scripts/smoke-routes.mjs <base-url>");
}

const paths = [
  "/",
  "/pages/aktuell",
  "/pages/archiv",
  "/pages/neuigkeiten",
  "/pages/ueber-uns",
  "/pages/impressum",
  "/pages/datenschutz",
  "/studio",
  "/_next/image?url=%2Flogo.png&w=3840&q=75",
  ...process.argv.slice(3),
];

let failed = false;
for (const path of paths) {
  const response = await fetch(new URL(path, baseUrl));
  console.log(`${response.status} ${path}`);
  if (response.status !== 200) failed = true;
  await response.body?.cancel();
}
// Temporary Edge maintenance response must never enable draft mode.
const draftResponse = await fetch(new URL("/api/draft-mode/enable", baseUrl), {
  redirect: "manual",
});
console.log(`${draftResponse.status} /api/draft-mode/enable (expected 503)`);
if (
  draftResponse.status !== 503 ||
  draftResponse.headers.has("set-cookie") ||
  draftResponse.headers.get("cache-control") !== "no-store"
) {
  failed = true;
}
await draftResponse.body?.cancel();
if (failed) process.exitCode = 1;
