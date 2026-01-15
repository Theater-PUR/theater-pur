import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BookingModalProps {
  bookingUrl: string;
  eventTitle: string;
}

export function BookingModal({ bookingUrl, eventTitle }: BookingModalProps) {
  return (
    <Button asChild className="font-semibold">
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ticketbuchung für ${eventTitle} in neuem Tab öffnen`}
      >
        Tickets buchen
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </Button>
  );
}
