import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import type { SanityBlock, SanityImage } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/image";

interface PortableTextRendererProps {
  value?: SanityBlock[];
  className?: string;
}

/**
 * Converts Portable Text blocks to plain text string
 * Use this only for preview cards and metadata, not for full content display
 */
export const portableTextToPlain = (blocks?: SanityBlock[]) =>
  blocks
    ?.map((block) => block.children?.map((child) => child.text).join(""))
    .join("\n\n") ?? "";

/**
 * Custom components for rendering Portable Text
 * Following official @portabletext/react recommendations
 */
const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-display font-bold mb-4 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-display font-bold mb-3 mt-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-display font-semibold mb-3 mt-5">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-display font-semibold mb-2 mt-4">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const target = value?.href?.startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-primary hover:underline font-medium"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: SanityImage & { caption?: string } }) => {
      if (!value?.asset) return null;

      const imageUrl = urlFor(value).width(1200).height(800).url();

      return (
        <figure className="my-6">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
            <Image
              src={imageUrl}
              alt={value.alt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          {(value.caption || value.alt) && (
            <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
              {value.caption || value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableTextRenderer({
  value,
  className,
}: PortableTextRendererProps) {
  if (!value || value.length === 0) return null;

  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  );
}
