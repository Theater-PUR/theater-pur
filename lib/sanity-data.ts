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
import type {
  Highlight,
  NewsPost,
  Play,
  SanityBlock,
  SanityImage,
  SiteSettings,
  StatItem,
  TeamMember,
} from "@/types/sanity";
import {
  FientaEvent,
  getFientaPerformancesForPlay as getFientaEventsForPlay,
} from "./fienta";
import cloneDeep from "lodash/cloneDeep";

export interface HomePageData {
  settings: SiteSettings | null;
  currentPlay: PlayWithFientaEvents | null;
  latestNews: NewsPost[];
}

export interface AboutPageData {
  settings: {
    aboutHeroTitle?: string;
    aboutHeroSubtitle?: string;
    aboutHeroDescription?: string;
    aboutStoryTitle?: string;
    aboutStory?: SanityBlock[];
    aboutImages?: SanityImage[];
    aboutTeamTitle?: string;
    aboutTeamSubtitle?: string;
    aboutTeamDescription?: string;
    aboutContactTitle?: string;
    aboutContactSubtitle?: string;
    aboutContactDescription?: string;
    stats?: StatItem[];
    aboutHighlights?: Highlight[];
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

export async function getHomePageData(): Promise<HomePageData | null> {
  const { data } = await sanityFetch({
    query: homePageQuery,
    tags: ["homepage"],
  });
  const homeData = data as HomePageData | null;

  if (!homeData) {
    return null;
  }

  const currentPlay = homeData.currentPlay as PlayWithFientaEvents | null;

  // Fetch Fienta events for current play if available
  if (currentPlay && homeData.settings?.fientaOrganizerId) {
    const fientaPerformances = await getFientaEventsForPlay(
      homeData.settings.fientaOrganizerId,
      currentPlay.title
    );

    // Replace with Fienta performances only (no fallback to CMS)
    currentPlay.events = fientaPerformances;
  } else if (currentPlay) {
    // If no Fienta integration, clear performances
    currentPlay.events = [];
  }

  return {
    settings: homeData.settings,
    currentPlay,
    latestNews: homeData.latestNews,
  };
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const { data } = await sanityFetch({
    query: siteSettingsQuery,
    tags: ["siteSettings"],
  });

  if (!data) {
    return null;
  }

  return data;
}

interface PlayWithFientaEvents extends Play {
  events: FientaEvent[];
}

async function enrichPlayWithFientaPerformances(
  play: Play | null
): Promise<PlayWithFientaEvents | null> {
  if (!play) {
    return null;
  }

  const playWithFientaEvents = cloneDeep(play) as PlayWithFientaEvents;

  // Fetch Fienta events if organizer ID is available
  const settings = await getSiteSettings();
  if (settings?.fientaOrganizerId) {
    const fientaEvents = await getFientaEventsForPlay(
      settings.fientaOrganizerId,
      playWithFientaEvents.title
    );

    playWithFientaEvents.events = fientaEvents;
  } else {
    playWithFientaEvents.events = [];
  }

  return playWithFientaEvents;
}

export async function getCurrentPlay(): Promise<PlayWithFientaEvents | null> {
  const { data } = await sanityFetch({
    query: currentPlayQuery,
    tags: ["play", "currentPlay"],
  });

  if (!data) {
    return null;
  }

  const play = data;

  return await enrichPlayWithFientaPerformances(play);
}

export async function getAllPlays(): Promise<Play[]> {
  const { data } = await sanityFetch({
    query: allPlaysQuery,
    tags: ["play"],
  });

  return (data as Play[]) ?? [];
}

export async function getPlayBySlug(
  slug: string
): Promise<PlayWithFientaEvents | null> {
  const { data } = await sanityFetch({
    query: playBySlugQuery,
    params: { slug },
    tags: ["play"],
  });

  if (!data) {
    return null;
  }

  const play = data;

  return await enrichPlayWithFientaPerformances(play);
}

export async function getAllNews(): Promise<NewsPost[]> {
  const { data } = await sanityFetch({
    query: allNewsQuery,
    tags: ["newsPost"],
  });

  return data as NewsPost[];
}

export async function getNewsPostBySlug(
  slug: string
): Promise<NewsPost | null> {
  const { data } = await sanityFetch({
    query: newsPostBySlugQuery,
    params: { slug },
    tags: ["newsPost"],
  });

  if (!data) {
    return null;
  }

  return data;
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
