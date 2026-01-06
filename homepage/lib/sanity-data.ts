import { client } from "@/sanity/lib/client";
import { homePageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import type { NewsPost, Play, SiteSettings } from "@/types/sanity";

export interface HomePageData {
  settings: SiteSettings | null;
  currentPlay: Play | null;
  latestNews: NewsPost[];
}

const DEFAULT_REVALIDATE = 300; // 5 minutes

export async function getHomePageData(): Promise<HomePageData> {
  const data = await client.fetch<HomePageData>(homePageQuery, {}, {
    next: { revalidate: DEFAULT_REVALIDATE, tags: ["homepage"] },
  });

  return {
    settings: data?.settings ?? null,
    currentPlay: data?.currentPlay ?? null,
    latestNews: data?.latestNews ?? [],
  };
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const settings = await client.fetch<SiteSettings | null>(siteSettingsQuery, {}, {
    next: { revalidate: DEFAULT_REVALIDATE, tags: ["siteSettings"] },
  });
  return settings ?? null;
}
