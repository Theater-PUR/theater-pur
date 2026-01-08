// GROQ queries for the Next.js app

export const homePageQuery = `
{
  "settings": *[_type == "siteSettings"][0]{
    _id,
    title,
    description,
    brandName,
    brandTagline,
    fientaOrganizerId,
    heroSubtitle,
    heroTitle,
    heroDescription,
    heroBackgroundImage,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
    currentPlaySectionTitle,
    currentPlaySectionSubtitle,
    currentPlaySectionDescription,
    newsSectionTitle,
    newsSectionSubtitle,
    joinCtaTitle,
    joinCtaDescription,
    joinCtaPrimaryText,
    joinCtaPrimaryLink,
    joinCtaSecondaryText,
    joinCtaSecondaryLink,
    stats,
    footerCtaTitle,
    footerCtaDescription,
    footerInfoTitle,
    footerInfoDescription,
    footerDescription,
    contactEmail,
    contactPhone,
    addressStreet,
    addressPostalCode,
    addressCity,
    socialLinks
  },
  "currentPlay": *[_type == "siteSettings"][0].currentPlay->{
    _id,
    title,
    slug,
    coverImage,
    description,
    author,
    director,
    year,
    gallery[]{
      asset,
      alt,
      caption
    }
  },
  "latestNews": *[_type == "newsPost"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    category
  }
}
`;

export const siteSettingsQuery = `
*[_type == "siteSettings"][0]{
  _id,
  title,
  description,
  brandName,
  brandTagline,
  fientaOrganizerId,
  heroSubtitle,
  heroTitle,
  heroDescription,
  heroBackgroundImage,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  currentPlaySectionTitle,
  currentPlaySectionSubtitle,
  currentPlaySectionDescription,
  newsSectionTitle,
  newsSectionSubtitle,
  joinCtaTitle,
  joinCtaDescription,
  joinCtaPrimaryText,
  joinCtaPrimaryLink,
  joinCtaSecondaryText,
  joinCtaSecondaryLink,
  aboutHeroTitle,
  aboutHeroSubtitle,
  aboutHeroDescription,
  aboutStoryTitle,
  aboutStory,
  aboutImages,
  aboutTeamTitle,
  aboutTeamSubtitle,
  aboutTeamDescription,
  aboutContactTitle,
  aboutContactSubtitle,
  aboutContactDescription,
  stats,
  aboutHighlights,
  footerCtaTitle,
  footerCtaDescription,
  footerInfoTitle,
  footerInfoDescription,
  footerDescription,
  contactEmail,
  contactPhone,
  addressStreet,
  addressPostalCode,
  addressCity,
  socialLinks
}
`;

export const latestNewsQuery = `
*[_type == "newsPost"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  category
}
`;

// Current play with full details for /aktuell page
export const currentPlayQuery = `
*[_type == "siteSettings"][0].currentPlay->{
  _id,
  title,
  slug,
  coverImage,
  author,
  director,
  description,
  synopsis,
  duration,
  year,
  cast[]{
    _key,
    actorName,
    roleName,
    photo
  },
  gallery[]{
    asset,
    alt,
    caption
  }
}
`;

// All plays for archive page
export const allPlaysQuery = `
*[_type == "play"] | order(year desc) {
  _id,
  title,
  slug,
  coverImage,
  author,
  director,
  description,
  year,
  isActive
}
`;

// Single play by slug for archive detail page
export const playBySlugQuery = `
*[_type == "play" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  coverImage,
  author,
  director,
  description,
  synopsis,
  duration,
  year,
  cast[]{
    _key,
    actorName,
    roleName,
    photo
  },
  gallery[]{
    asset,
    alt,
    caption
  }
}
`;

// All news posts for news listing page
export const allNewsQuery = `
*[_type == "newsPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  category
}
`;

// Single news post by slug
export const newsPostBySlugQuery = `
*[_type == "newsPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  content,
  publishedAt,
  category
}
`;

// About page data (team members, settings, etc.)
export const aboutPageQuery = `
{
  "settings": *[_type == "siteSettings"][0]{
    _id,
    fientaOrganizerId,
    aboutHeroTitle,
    aboutHeroSubtitle,
    aboutHeroDescription,
    aboutStoryTitle,
    aboutStory,
    aboutImages,
    aboutTeamTitle,
    aboutTeamSubtitle,
    aboutTeamDescription,
    aboutContactTitle,
    aboutContactSubtitle,
    aboutContactDescription,
    stats,
    aboutHighlights,
    contactEmail,
    contactPhone,
    addressStreet,
    addressPostalCode,
    addressCity,
    socialLinks
  },
  "teamMembers": *[_type == "teamMember"] | order(order asc, name asc) {
    _id,
    name,
    role,
    photo,
    bio,
    order
  }
}
`;
