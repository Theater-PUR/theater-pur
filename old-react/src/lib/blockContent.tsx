import type { SanityBlock } from "@/types/sanity";

// Simple block content renderer for Sanity portable text
export function renderBlockContent(blocks: SanityBlock[] | undefined): React.ReactNode {
  if (!blocks || blocks.length === 0) return null;

  return blocks.map((block) => {
    if (block._type !== "block") return null;

    const style = block.style || "normal";
    const children = block.children?.map((child, index) => {
      let text: React.ReactNode = child.text;

      // Apply marks (bold, italic, etc.)
      if (child.marks) {
        child.marks.forEach((mark) => {
          if (mark === "strong") {
            text = <strong key={`${child._key}-strong`}>{text}</strong>;
          } else if (mark === "em") {
            text = <em key={`${child._key}-em`}>{text}</em>;
          } else {
            // Check if it's a link mark
            const linkMark = block.markDefs?.find((def) => def._key === mark);
            if (linkMark && linkMark._type === "link" && linkMark.href) {
              text = (
                <a
                  key={`${child._key}-link`}
                  href={linkMark.href}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text}
                </a>
              );
            }
          }
        });
      }

      return <span key={child._key || index}>{text}</span>;
    });

    switch (style) {
      case "h1":
        return (
          <h1 key={block._key} className="text-4xl font-display font-bold mb-4">
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2 key={block._key} className="text-3xl font-display font-bold mb-3">
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3 key={block._key} className="text-2xl font-display font-semibold mb-2">
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4 key={block._key} className="text-xl font-display font-semibold mb-2">
            {children}
          </h4>
        );
      case "blockquote":
        return (
          <blockquote
            key={block._key}
            className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4"
          >
            {children}
          </blockquote>
        );
      default:
        return (
          <p key={block._key} className="mb-4 leading-relaxed">
            {children}
          </p>
        );
    }
  });
}

// Get plain text from blocks (for excerpts, etc.)
export function getPlainText(blocks: SanityBlock[] | undefined): string {
  if (!blocks) return "";

  return blocks
    .filter((block) => block._type === "block")
    .map((block) => block.children?.map((child) => child.text).join("") || "")
    .join(" ");
}
