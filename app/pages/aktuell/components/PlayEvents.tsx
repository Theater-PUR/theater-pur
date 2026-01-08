import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";
import { BookingModal } from "../BookingModal";
import type { FientaEvent } from "@/lib/fienta";

interface PlayEventsProps {
  events: FientaEvent[];
  playTitle: string;
}

export function PlayEvents({ events, playTitle }: PlayEventsProps) {
  if (!events || events.length === 0) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
        Aufführungstermine
      </h2>
      <div className="space-y-4">
        {events.map((event) => {
          const [date, time] = event.duration_string.split(", ");
          return (
            <div
              key={event.id}
              className="p-6 rounded-lg bg-card border border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>{date}</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{time}</span>
                </div>

                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{event.venue}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {event.sales_status === "soldOut" ? (
                  <Badge
                    variant="secondary"
                    className="bg-destructive/20 text-destructive"
                  >
                    Ausverkauft
                  </Badge>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    {event.sales_status !== "soldOutSoon" && (
                      <Badge
                        variant="secondary"
                        className="bg-yellow-500/20 text-yellow-500 animate-pulse"
                      >
                        Nur noch wenige
                        <br />
                        Tickets verfügbar
                      </Badge>
                    )}
                    {event.buy_tickets_url && (
                      <BookingModal
                        bookingUrl={event.buy_tickets_url}
                        eventTitle={playTitle}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
