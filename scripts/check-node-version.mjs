// Vercel manages patch releases for the selected Node 24 runtime. Reject stale
// build images and function runtimes before they can use pre-security Node.
const [major, minor, patch] = process.versions.node.split(".").map(Number);
const isPatchedNode24 =
  major === 24 && (minor > 22 || (minor === 22 && patch >= 1));

if (!isPatchedNode24) {
  throw new Error(
    `Node.js 24.22.1 or newer in the 24.x release line is required for CVE-2026-111497; found ${process.versions.node}.`
  );
}

console.log(`Using patched Node.js ${process.versions.node}`);
