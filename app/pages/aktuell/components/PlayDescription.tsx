import { PortableTextRenderer } from "@/lib/portableText";
import type { SanityBlock } from "@/types/sanity";

interface PlayDescriptionProps {
  description?: SanityBlock[];
}

export function PlayDescription({ description }: PlayDescriptionProps) {
  if (!description || description.length === 0) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
        Über das Stück
      </h2>
      <div className="prose prose-invert prose-lg max-w-none">
        <PortableTextRenderer value={description} />
      </div>
    </section>
  );
}
