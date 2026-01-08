import { getCurrentPlay } from "@/lib/sanity-data";
import { urlFor } from "@/sanity/lib/image";
import {
  EmptyState,
  PlayHero,
  PlayDescription,
  PlayCast,
  PlayGallery,
  PlayEvents,
  PlayBookingSidebar,
} from "./components";

export default async function CurrentPlayPage() {
  const play = await getCurrentPlay();

  if (!play) {
    return <EmptyState />;
  }

  // Use synopsis for detail page if available, otherwise fall back to description
  const description = play.synopsis || play.description;

  const coverImageUrl = play.coverImage
    ? urlFor(play.coverImage).width(1200).height(800).url()
    : undefined;

  return (
    <>
      <PlayHero play={play} coverImageUrl={coverImageUrl} />

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <PlayDescription description={description} />
              <PlayCast cast={play.cast || []} />
              <PlayGallery gallery={play.gallery || []} />
              <PlayEvents events={play.events} playTitle={play.title} />
            </div>

            {/* Sidebar */}
            <PlayBookingSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
