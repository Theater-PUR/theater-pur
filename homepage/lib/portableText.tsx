import React from "react";
import type { SanityBlock } from "@/types/sanity";

interface PortableTextRendererProps {
  value?: SanityBlock[];
  className?: string;
}

const getText = (block: SanityBlock) =>
  block.children?.map((child) => child.text).join("") ?? "";

export function PortableTextRenderer({ value, className }: PortableTextRendererProps) {
  if (!value || value.length === 0) return null;

  return (
    <div className={className}>
      {value.map((block) => {
        if (block._type !== "block") return null;

        const text = getText(block);

        switch (block.style) {
          case "h2":
            return (
              <h2 key={block._key} className="text-2xl font-display font-bold mb-3">
                {text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={block._key} className="text-xl font-display font-semibold mb-3">
                {text}
              </h3>
            );
          default:
            return (
              <p key={block._key} className="text-muted-foreground mb-3 leading-relaxed">
                {text}
              </p>
            );
        }
      })}
    </div>
  );
}
