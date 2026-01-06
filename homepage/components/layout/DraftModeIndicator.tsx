"use client";

import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export function DraftModeIndicator() {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  // Don't show in studio
  if (isStudio) {
    return null;
  }

  const handleDisableDraftMode = () => {
    window.location.href = `/api/draft-mode/disable?redirect=${encodeURIComponent(pathname || "/")}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-orange-600 text-white px-4 py-2 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-2">
        <span className="font-semibold">🔍 Vorschaumodus aktiv</span>
        <span className="text-sm opacity-90">
          Du siehst Entwürfe und unveröffentlichte Inhalte
        </span>
      </div>
      <button
        onClick={handleDisableDraftMode}
        className="flex items-center gap-2 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors"
        aria-label="Vorschaumodus beenden"
      >
        <span className="text-sm">Beenden</span>
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
