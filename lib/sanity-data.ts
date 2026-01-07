import { sanityFetch } from "@/sanity/lib/live";
import {
  homePageQuery,
  siteSettingsQuery,
  currentPlayQuery,
  allPlaysQuery,
  playBySlugQuery,
  allNewsQuery,
  newsPostBySlugQuery,
  aboutPageQuery,
} from "@/sanity/lib/queries";
import type { NewsPost, Play, SiteSettings, TeamMember } from "@/types/sanity";
import { getFientaPerformancesForPlay } from "./fienta";

export interface HomePageData {
  settings: SiteSettings | null;
  currentPlay: Play | null;
  latestNews: NewsPost[];
}

export interface AboutPageData {
  settings: {
    aboutHeroTitle?: string;
    aboutHeroSubtitle?: string;
    aboutHeroDescription?: string;
    aboutStoryTitle?: string;
    aboutStory?: any[];
    aboutImages?: any[];
    aboutTeamTitle?: string;
    aboutTeamSubtitle?: string;
    aboutTeamDescription?: string;
    aboutContactTitle?: string;
    aboutContactSubtitle?: string;
    aboutContactDescription?: string;
    stats?: any[];
    aboutHighlights?: any[];
    contactEmail?: string;
    contactPhone?: string;
    addressStreet?: string;
    addressPostalCode?: string;
    addressCity?: string;
    socialLinks?: {
      facebook?: string;
      instagram?: string;
      youtube?: string;
    };
  } | null;
  teamMembers: TeamMember[];
}

export async function getHomePageData(): Promise<HomePageData> {
  const { data } = await sanityFetch({
    query: homePageQuery,
    tags: ["homepage"],
  });
  const homeData = data as HomePageData | null;

  let currentPlay = homeData?.currentPlay ?? null;

  // Fetch Fienta events for current play if available
  if (currentPlay && homeData?.settings?.fientaOrganizerId) {
    const fientaPerformances = await getFientaPerformancesForPlay(
      homeData.settings.fientaOrganizerId,
      currentPlay.title
    );
    
    // Replace with Fienta performances only (no fallback to CMS)
    currentPlay = {
      ...currentPlay,
      performances: fientaPerformances,
    };
  } else if (currentPlay) {
    // If no Fienta integration, clear performances
    currentPlay = {
      ...currentPlay,
      performances: [],
    };
  }

  return {
    settings: homeData?.settings ?? null,
    currentPlay,
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

export async function getCurrentPlay(): Promise<Play | null> {
  const { data } = await sanityFetch({
    query: currentPlayQuery,
    tags: ["play", "currentPlay"],
  });

  const play = (data as Play | null) ?? null;
  
  if (!play) return null;

  // Fetch Fienta events if organizer ID is available
  const settings = await getSiteSettings();
  if (settings?.fientaOrganizerId) {
    const fientaPerformances = await getFientaPerformancesForPlay(
      settings.fientaOrganizerId,
      play.title
    );
    
    // Replace with Fienta performances only (no fallback to CMS)
    play.performances = fientaPerformances;
  } else {
    // If no Fienta integration, clear performances
    play.performances = [];
  }

  return play;
}

export async function getAllPlays(): Promise<Play[]> {
  const { data } = await sanityFetch({
    query: allPlaysQuery,
    tags: ["play"],
  });

  return (data as Play[]) ?? [];
}

export async function getPlayBySlug(slug: string): Promise<Play | null> {
  const { data } = await sanityFetch({
    query: playBySlugQuery,
    params: { slug },
    tags: ["play"],
  });

  const play = (data as Play | null) ?? null;
  
  if (!play) return null;

  // Fetch Fienta events if organizer ID is available
  const settings = await getSiteSettings();
  if (settings?.fientaOrganizerId) {
    const fientaPerformances = await getFientaPerformancesForPlay(
      settings.fientaOrganizerId,
      play.title
    );
    
    // Replace with Fienta performances only (no fallback to CMS)
    play.performances = fientaPerformances;
  } else {
    // If no Fienta integration, clear performances
    play.performances = [];
  }

  return play;
}

export async function getAllNews(): Promise<NewsPost[]> {
  const { data } = await sanityFetch({
    query: allNewsQuery,
    tags: ["newsPost"],
  });

  return (data as NewsPost[]) ?? [];
}

export async function getNewsPostBySlug(
  slug: string
): Promise<NewsPost | null> {
  const { data } = await sanityFetch({
    query: newsPostBySlugQuery,
    params: { slug },
    tags: ["newsPost"],
  });

  return (data as NewsPost | null) ?? null;
}

export async function getAboutPageData(): Promise<AboutPageData> {
  const { data } = await sanityFetch({
    query: aboutPageQuery,
    tags: ["aboutPage", "teamMember", "siteSettings"],
  });
  const aboutData = data as AboutPageData | null;

  return {
    settings: aboutData?.settings ?? null,
    teamMembers: aboutData?.teamMembers ?? [],
  };
}
