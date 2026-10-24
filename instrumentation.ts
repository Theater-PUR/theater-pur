export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // [DEBUG-theater-runtime-probe] Never bypass the security guard below.
    try {
      const { reportRuntimeProbe } =
        await import("./scripts/report-runtime-probe.mjs");
      await reportRuntimeProbe();
    } catch {
      // Probe failures must not prevent the original runtime security check.
    }
    await import("./scripts/check-runtime-version.mjs");
  }
}
