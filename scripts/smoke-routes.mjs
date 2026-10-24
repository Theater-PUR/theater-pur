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
// Without a preview secret this handler must reject before enabling draft mode.
const draftResponse = await fetch(new URL("/api/draft-mode/enable", baseUrl), {
  redirect: "manual",
});
console.log(`${draftResponse.status} /api/draft-mode/enable (expected 401)`);
if (draftResponse.status !== 401 || draftResponse.headers.has("set-cookie")) {
  failed = true;
}
await draftResponse.body?.cancel();
if (failed) process.exitCode = 1;
