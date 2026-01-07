import { SectionHeader } from "@/components/SectionHeader";
import { NewsCard, type NewsPost as NewsCardPost } from "@/components/NewsCard";
import { getAllNews } from "@/lib/sanity-data";
import { urlFor } from "@/sanity/lib/image";

export default async function NewsPage() {
  const allNews = await getAllNews();

  // Map to the format expected by NewsCard
  const newsPosts: NewsCardPost[] = allNews.map((post) => ({
    slug: post.slug?.current ?? post._id,
    title: post.title,
    excerpt: post.excerpt,
    coverImage: post.coverImage
      ? urlFor(post.coverImage).width(800).height(450).url()
      : undefined,
    publishedAt: post.publishedAt
      ? new Intl.DateTimeFormat("de-DE", { dateStyle: "long" }).format(
          new Date(post.publishedAt)
        )
      : "",
    category: post.category,
  }));

  const [featuredPost, ...otherPosts] = newsPosts;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-spotlight-top">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Aktuelles"
            title="Neuigkeiten"
            description="Bleiben Sie auf dem Laufenden über unsere Aktivitäten, kommende Veranstaltungen und Blicke hinter die Kulissen."
          />
        </div>
      </section>

      {newsPosts.length > 0 ? (
        <>
          {/* Featured Post */}
          <section className="py-8 bg-background">
            <div className="container mx-auto px-4">
              <NewsCard post={featuredPost} variant="featured" />
            </div>
          </section>

          {/* Other Posts */}
          {otherPosts.length > 0 && (
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherPosts.map((post) => (
                    <NewsCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-lg">
              Noch keine Neuigkeiten vorhanden.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
