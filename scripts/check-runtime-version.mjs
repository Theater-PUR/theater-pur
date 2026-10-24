import { constants } from "node:zlib";

// Vercel manages patch releases. Reject stale build images and function
// runtimes before they can use the decoder affected by CVE-2026-111497.
const [major, minor, patch] = process.versions.node.split(".").map(Number);
const isPatchedNode22 =
  !process.versions.bun &&
  major === 22 &&
  (minor > 23 || (minor === 23 && patch >= 4));
const hasBrotliPatch =
  constants.BROTLI_DECODER_ERROR_FORMAT_BLOCK_SWITCH === -17;

if (!isPatchedNode22 || !hasBrotliPatch) {
  throw new Error(
    `Node.js >=22.23.4 in 22.x with the Brotli security patch is required for CVE-2026-111497; found ${process.versions.node}.`
  );
}

console.log(`Using patched Node.js ${process.versions.node}`);
