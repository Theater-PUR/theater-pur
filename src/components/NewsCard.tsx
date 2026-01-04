import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  publishedAt: string;
  category?: string;
}

interface NewsCardProps {
  post: NewsPost;
  variant?: "featured" | "default";
}

export function NewsCard({ post, variant = "default" }: NewsCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link
      to={`/neuigkeiten/${post.id}`}
      className={cn(
        "group block overflow-hidden rounded-lg border border-border/50 bg-card transition-all duration-300",
        "hover:border-primary/50 hover:shadow-lg",
        isFeatured && "md:grid md:grid-cols-2 md:gap-0"
      )}
    >
      {/* Image */}
      {post.coverImage && (
        <div
          className={cn(
            "relative overflow-hidden",
            isFeatured ? "aspect-video md:aspect-auto md:h-full" : "aspect-video"
          )}
        >
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {post.category && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                {post.category}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className={cn("p-6", isFeatured && "md:p-8 md:flex md:flex-col md:justify-center")}>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-4 h-4" />
          <time>{post.publishedAt}</time>
        </div>
        <h3
          className={cn(
            "font-display font-bold text-foreground mb-3 transition-colors group-hover:text-primary",
            isFeatured ? "text-2xl md:text-3xl" : "text-lg"
          )}
        >
          {post.title}
        </h3>
        <p
          className={cn(
            "text-muted-foreground leading-relaxed mb-4",
            isFeatured ? "line-clamp-3" : "text-sm line-clamp-2"
          )}
        >
          {post.excerpt}
        </p>
        <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
          Weiterlesen
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
