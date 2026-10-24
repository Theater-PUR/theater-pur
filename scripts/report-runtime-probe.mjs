// [DEBUG-theater-runtime-probe] Temporary version-only startup diagnostic.
import { request } from "node:http";
import { constants } from "node:zlib";

const probeUrl =
  "http://coolify.apps.janjaap.de:17843/064efe15fde79250be7ccb2285b84997f8d14081";

export function reportRuntimeProbe() {
  return new Promise((resolve) => {
    const body = JSON.stringify({
      nodeVersion: process.version,
      bunVersion: process.versions.bun,
      brotliVersion: process.versions.brotli,
      hasBrotliBlockSwitchPatch:
        constants.BROTLI_DECODER_ERROR_FORMAT_BLOCK_SWITCH === -17,
    });
    const req = request(
      probeUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
          "Accept-Encoding": "identity",
        },
        signal: AbortSignal.timeout(2000),
      },
      (response) => {
        response.resume();
        response.once("end", resolve);
        response.once("error", resolve);
      }
    );
    req.once("error", resolve);
    req.end(body);
  });
}
