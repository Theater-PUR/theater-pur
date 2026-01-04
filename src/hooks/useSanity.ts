import { useQuery } from "@tanstack/react-query";
import { sanityClient, isSanityConfigured } from "@/lib/sanity";
import {
  currentPlayQuery,
  allPlaysQuery,
  archivedPlaysQuery,
  playBySlugQuery,
  allNewsQuery,
  latestNewsQuery,
  newsBySlugQuery,
  teamMembersQuery,
  siteSettingsQuery,
} from "@/lib/queries";
import type { Play, NewsPost, TeamMember, SiteSettings } from "@/types/sanity";

// Hook for current play
export function useCurrentPlay() {
  return useQuery<Play | null>({
    queryKey: ["currentPlay"],
    queryFn: async () => {
      if (!isSanityConfigured()) return null;
      return sanityClient.fetch(currentPlayQuery);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Hook for all plays
export function useAllPlays() {
  return useQuery<Play[]>({
    queryKey: ["allPlays"],
    queryFn: async () => {
      if (!isSanityConfigured()) return [];
      return sanityClient.fetch(allPlaysQuery);
    },
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for archived plays
export function useArchivedPlays() {
  return useQuery<Play[]>({
    queryKey: ["archivedPlays"],
    queryFn: async () => {
      if (!isSanityConfigured()) return [];
      return sanityClient.fetch(archivedPlaysQuery);
    },
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for single play by slug
export function usePlayBySlug(slug: string | undefined) {
  return useQuery<Play | null>({
    queryKey: ["play", slug],
    queryFn: async () => {
      if (!isSanityConfigured() || !slug) return null;
      return sanityClient.fetch(playBySlugQuery, { slug });
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for all news posts
export function useAllNews() {
  return useQuery<NewsPost[]>({
    queryKey: ["allNews"],
    queryFn: async () => {
      if (!isSanityConfigured()) return [];
      return sanityClient.fetch(allNewsQuery);
    },
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for latest news (for homepage)
export function useLatestNews() {
  return useQuery<NewsPost[]>({
    queryKey: ["latestNews"],
    queryFn: async () => {
      if (!isSanityConfigured()) return [];
      return sanityClient.fetch(latestNewsQuery);
    },
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for single news post by slug
export function useNewsBySlug(slug: string | undefined) {
  return useQuery<NewsPost | null>({
    queryKey: ["news", slug],
    queryFn: async () => {
      if (!isSanityConfigured() || !slug) return null;
      return sanityClient.fetch(newsBySlugQuery, { slug });
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for team members
export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ["teamMembers"],
    queryFn: async () => {
      if (!isSanityConfigured()) return [];
      return sanityClient.fetch(teamMembersQuery);
    },
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for site settings
export function useSiteSettings() {
  return useQuery<SiteSettings | null>({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      if (!isSanityConfigured()) return null;
      return sanityClient.fetch(siteSettingsQuery);
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
