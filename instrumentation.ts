export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./scripts/check-runtime-version.mjs");
  }
}
