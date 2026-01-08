"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

interface BookingModalProps {
  bookingUrl: string;
  eventTitle: string;
}

export function BookingModal({ bookingUrl, eventTitle }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className="font-semibold" onClick={() => setIsOpen(true)}>
        Tickets buchen
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="!max-w-[1200px] w-[85vw] h-[90vh] p-2 sm:!max-w-[1200px]">
          <DialogTitle className="sr-only">
            Ticketbuchung für {eventTitle}
          </DialogTitle>
          <iframe
            src={bookingUrl}
            className="w-full h-full rounded border border-border"
            title={`Ticketbuchung für ${eventTitle}`}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
