// Fienta API integration
// Documentation: https://fienta.com/help/displaying-events-on-your-website

export interface FientaEvent {
  id: number;
  title: string;
  starts_at: string; // "2020-12-16 19:00:00"
  ends_at: string;
  duration_string: string; // "Mon 16. December 2020 at 19:00 - 21:15"
  venue: string;
  address: string;
  address_postal_code: string;
  description: string;
  url: string;
  sales_status: "available" | "soldOut" | "soldOutSoon";
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
  organizerId: string
): Promise<FientaEvent[]> {
  try {
    const url = `https://fienta.com/api/v1/public/events?organizer=${organizerId}&locale=de`;
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
  // Normalize by removing invisible characters and normalizing Unicode
  const normalizeString = (str: string) => {
    return str
      .trim()
      .toLowerCase()
      .normalize("NFKD") // Normalize Unicode
      .replace(/[\u200B-\u200D\uFEFF\u00A0]/g, "") // Remove zero-width spaces
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, "") // Remove control characters
      .replace(/\s+/g, " "); // Normalize whitespace
  };

  const normalizedPlayTitle = normalizeString(playTitle);

  return events.filter((event) => {
    const normalizedEventTitle = normalizeString(event.title);

    return normalizedEventTitle === normalizedPlayTitle;
  });
}

/**
 * Fetch and transform Fienta events for a specific play
 */
export async function getFientaPerformancesForPlay(
  organizerId: string,
  playTitle: string
): Promise<FientaEvent[]> {
  const allEvents = await fetchFientaEvents(organizerId);

  return filterEventsByTitle(allEvents, playTitle);
}
