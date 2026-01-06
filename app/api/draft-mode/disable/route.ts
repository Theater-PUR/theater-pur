import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const draft = await draftMode();
  draft.disable();

  // Redirect to the page the user was on, or home
  const redirectUrl = request.nextUrl.searchParams.get("redirect") || "/";

  return NextResponse.redirect(new URL(redirectUrl, request.url));
}
