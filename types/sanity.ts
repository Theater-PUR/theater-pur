// Shared Sanity types for the Next.js app

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface SanityBlock {
  _type: "block";
  _key: string;
  style?: string;
  children: Array<{
    _type: "span";
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
}

export interface CastMember {
  _key: string;
  actorName: string;
  roleName: string;
  photo?: SanityImage;
}

export interface Location {
  name?: string;
  street?: string;
  postalCode?: string;
  city?: string;
  remarks?: string;
}

export interface TicketPrice {
  _key: string;
  category: string;
  price: number;
  description?: string;
}

export interface Performance {
  _key: string;
  date: string;
  time: string;
  location?: Location;
  availableSeats?: number;
  totalSeats?: number;
  bookingUrl?: string;
}

export interface Play {
  _id: string;
  _type: "play";
  title: string;
  slug: SanitySlug;
  coverImage?: SanityImage;
  description?: SanityBlock[];
  synopsis?: SanityBlock[];
  author?: string;
  director?: string;
  year: number;
  duration?: string;
  isActive?: boolean;
  cast?: CastMember[];
  performances?: Performance[];
  pricing?: TicketPrice[];
  gallery?: SanityImage[];
}

export interface NewsPost {
  _id: string;
  _type: "newsPost";
  title: string;
  slug: SanitySlug;
  excerpt: string;
  coverImage?: SanityImage;
  content?: SanityBlock[];
  publishedAt: string;
  category?: string;
}

export interface TeamMember {
  _id: string;
  _type: "teamMember";
  name: string;
  role: string;
  bio?: SanityBlock[];
  photo?: SanityImage;
  order?: number;
}

export interface StatItem {
  icon?: string; // Lucide icon name
  value: string;
  label: string;
}

export interface Highlight {
  icon?: string; // Lucide icon name
  title: string;
  description: string;
}

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  // General
  title: string;
  description: string;
  brandName?: string;
  brandTagline?: string;
  currentPlay?: {
    _ref: string;
    _type: "reference";
  };
  // Integrations
  fientaOrganizerId?: string;
  // Hero
  heroSubtitle?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroBackgroundImage?: SanityImage;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  // Homepage
  currentPlaySectionTitle?: string;
  currentPlaySectionSubtitle?: string;
  currentPlaySectionDescription?: string;
  newsSectionTitle?: string;
  newsSectionSubtitle?: string;
  joinCtaTitle?: string;
  joinCtaDescription?: string;
  joinCtaPrimaryText?: string;
  joinCtaPrimaryLink?: string;
  joinCtaSecondaryText?: string;
  joinCtaSecondaryLink?: string;
  // Contact
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
  // About
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
  // Footer
  footerCtaTitle?: string;
  footerCtaDescription?: string;
  footerInfoTitle?: string;
  footerInfoDescription?: string;
  footerDescription?: string;
}
