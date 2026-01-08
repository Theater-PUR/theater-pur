import { ImageGallery } from "@/components/ImageGallery";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/types/sanity";

interface PlayGalleryProps {
  gallery: SanityImage[];
}

export function PlayGallery({ gallery }: PlayGalleryProps) {
  if (!gallery || gallery.length === 0) return null;

  const images = gallery
    .filter((image) => image.asset)
    .map((image) => ({
      url: urlFor(image).width(1200).height(800).url(),
      alt: image.alt,
      caption: image.caption,
    }));

  if (images.length === 0) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
        Impressionen
      </h2>
      <ImageGallery images={images} />
    </section>
  );
}
