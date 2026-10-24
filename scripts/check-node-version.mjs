// Vercel manages patch releases for the selected Node 22 runtime. Reject stale
// build images and function runtimes before they can use pre-security Node.
const [major, minor, patch] = process.versions.node.split(".").map(Number);
const isPatchedNode22 =
  major === 22 && (minor > 23 || (minor === 23 && patch >= 4));

if (!isPatchedNode22) {
  throw new Error(
    `Node.js 22.23.4 or newer in the 22.x release line is required for CVE-2026-111497; found ${process.versions.node}.`
  );
}

console.log(`Using patched Node.js ${process.versions.node}`);
