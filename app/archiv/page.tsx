import { getAllPlays } from "@/lib/sanity-data";
import { ArchivePageClient } from "./ArchivePageClient";
import { urlFor } from "@/sanity/lib/image";
import type { SanityBlock } from "@/types/sanity";

const portableTextToPlain = (blocks?: SanityBlock[]) =>
  blocks
    ?.map((block) => block.children?.map((child) => child.text).join(""))
    .join(" ") ?? "";

export default async function ArchivePage() {
  const allPlays = await getAllPlays();

  // Filter out active plays and map to the format expected by PlayCard
  const archivePlays = allPlays
    .filter((play) => !play.isActive)
    .map((play) => ({
      slug: play.slug?.current ?? play._id,
      title: play.title,
      subtitle: play.author ? `von ${play.author}` : play.director,
      description: portableTextToPlain(play.description),
      coverImage: play.coverImage
        ? urlFor(play.coverImage).width(600).height(800).url()
        : undefined,
      year: play.year,
    }));

  return <ArchivePageClient plays={archivePlays} />;
}
