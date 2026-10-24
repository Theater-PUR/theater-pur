import { constants } from "node:zlib";

// Vercel manages patch releases. Reject stale build images and function
// runtimes before they can use the decoder affected by CVE-2026-111497.
const bunVersion = process.versions.bun;
const [major, minor, patch] = (bunVersion ?? process.versions.node)
  .split(".")
  .map(Number);
const isPatchedRuntime = bunVersion
  ? major === 1 && (minor > 4 || (minor === 4 && patch >= 4))
  : major === 22 && (minor > 23 || (minor === 23 && patch >= 4));
const hasBrotliPatch =
  constants.BROTLI_DECODER_ERROR_FORMAT_BLOCK_SWITCH === -17;

if (!isPatchedRuntime || !hasBrotliPatch) {
  throw new Error(
    `Patched Bun >=1.4.4 in 1.x or Node.js >=22.23.4 in 22.x is required for CVE-2026-111497; found ${bunVersion ? `Bun ${bunVersion}` : `Node.js ${process.versions.node}`}.`
  );
}

console.log(
  `Using patched ${bunVersion ? `Bun ${bunVersion}` : `Node.js ${process.versions.node}`}`
);
