import { getFilters, getPublicEvents } from "@/lib/events/selectors";

export const revalidate = 3600;

export async function GET() {
  const events = getPublicEvents();
  const eventFilters = getFilters(events);

  return Response.json(
    { events, eventFilters },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
      }
    }
  );
}
