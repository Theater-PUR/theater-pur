// Keep draft preview disabled until the managed Node runtime is patched.
// The Edge handler uses no Node APIs or CMS token. Restore the implementation
// in sanity/lib/draft-mode-enabled.ts after validating the provider rollout.
export const runtime = "edge";

export function GET() {
  return new Response("Draft previews are temporarily unavailable.", {
    status: 503,
    headers: {
      "Cache-Control": "no-store",
      "Retry-After": "3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
