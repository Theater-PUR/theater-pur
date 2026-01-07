"use client";

import { AppShell } from "@/components/layout/AppShell";
import { redirect, usePathname } from "next/navigation";

export default function NotFoundPage() {
  const pathname = usePathname();

  if (!pathname.startsWith("/pages")) {
    redirect("/pages" + pathname);
  }

  return (
    <AppShell settings={null} isDraftMode={false}>
      <h1>404 - Seite nicht gefunden</h1>
    </AppShell>
  );
}
