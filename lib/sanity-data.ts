import { sanityFetch } from "@/sanity/lib/live";
import { homePageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import type { NewsPost, Play, SiteSettings } from "@/types/sanity";

export interface HomePageData {
  settings: SiteSettings | null;
  currentPlay: Play | null;
  latestNews: NewsPost[];
}

export async function getHomePageData(): Promise<HomePageData> {
  const { data } = await sanityFetch({
    query: homePageQuery,
    tags: ["homepage"],
  });
  const homeData = data as HomePageData | null;

  return {
    settings: homeData?.settings ?? null,
    currentPlay: homeData?.currentPlay ?? null,
    latestNews: homeData?.latestNews ?? [],
  };
}

export async function getSiteSettings(options?: {
  stega?: boolean;
}): Promise<SiteSettings | null> {
  const { data } = await sanityFetch({
    query: siteSettingsQuery,
    stega: options?.stega,
    tags: ["siteSettings"],
  });

  return (data as SiteSettings | null) ?? null;
}
