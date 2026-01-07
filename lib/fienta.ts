// Fienta API integration
// Documentation: https://fienta.com/help/displaying-events-on-your-website

import type { Performance } from "@/types/sanity";

export interface FientaEvent {
  id: number;
  title: string;
  starts_at: string; // "2020-12-16 19:00:00"
  ends_at: string;
  duration_string: string; // "Mon 16. December 2020 at 19:00 - 21:15"
  venue: string;
  address: string;
  description: string;
  url: string;
  buy_tickets_url: string;
  image_url: string;
  organizer_name: string;
  organizer_phone: string;
  organizer_email: string;
}

export interface FientaResponse {
  events: FientaEvent[];
}

/**
 * Fetch events from Fienta API for a specific organizer
 */
export async function fetchFientaEvents(
  organizerId: string,
  locale: string = "de"
): Promise<FientaEvent[]> {
  try {
    const url = `https://fienta.com/api/v1/public/events?organizer=${organizerId}&locale=${locale}`;
    const response = await fetch(url, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch Fienta events: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data: FientaResponse = await response.json();
    return data.events || [];
  } catch (error) {
    console.error("Error fetching Fienta events:", error);
    return [];
  }
}

/**
 * Filter Fienta events by exact title match
 */
export function filterEventsByTitle(
  events: FientaEvent[],
  playTitle: string
): FientaEvent[] {
  const normalizedPlayTitle = playTitle.trim().toLowerCase();
  return events.filter(
    (event) => event.title.trim().toLowerCase() === normalizedPlayTitle
  );
}

/**
 * Transform a Fienta event into our Performance format
 */
export function transformFientaEventToPerformance(
  event: FientaEvent
): Performance {
  // Parse the date and time from starts_at
  const startDate = new Date(event.starts_at.replace(" ", "T"));
  const dateStr = startDate.toISOString().split("T")[0]; // YYYY-MM-DD format

  // Extract time in German format
  const timeStr = startDate.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Split address into parts (Fienta returns address without country)
  // Example: "201 E Randolph St, Chicago, IL 60602"
  const addressParts = event.address.split(",").map((part) => part.trim());

  return {
    _key: `fienta-${event.id}`,
    date: dateStr,
    time: `${timeStr} Uhr`,
    location: {
      name: event.venue,
      street: addressParts[0] || undefined,
      city: addressParts[addressParts.length - 1] || undefined,
      postalCode: undefined, // Fienta doesn't provide this separately
    },
    bookingUrl: event.buy_tickets_url || event.url,
    // Note: Fienta doesn't provide available seats info via API
    availableSeats: undefined,
    totalSeats: undefined,
  };
}

/**
 * Fetch and transform Fienta events for a specific play
 */
export async function getFientaPerformancesForPlay(
  organizerId: string,
  playTitle: string
): Promise<Performance[]> {
  const allEvents = await fetchFientaEvents(organizerId);
  const matchingEvents = filterEventsByTitle(allEvents, playTitle);
  return matchingEvents.map(transformFientaEventToPerformance);
}
