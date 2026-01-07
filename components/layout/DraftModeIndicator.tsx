"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/app/actions";
import { useDraftModeEnvironment } from "next-sanity/hooks";
import { X } from "lucide-react";

export function DraftModeIndicator() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }
  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <div className="w-full bg-orange-600 text-white px-4 py-2 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-2">
        <span className="font-semibold">🔍 Vorschaumodus aktiv</span>
        <span className="text-sm opacity-90">
          Du siehst Entwürfe und unveröffentlichte Inhalte
        </span>
      </div>
      {pending ? (
        "wird beendet..."
      ) : (
        <button
          onClick={disable}
          className="flex items-center gap-2 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors"
          aria-label="Vorschaumodus beenden"
        >
          <span className="text-sm">Beenden</span>
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
