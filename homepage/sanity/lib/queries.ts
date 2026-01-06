// GROQ queries for the Next.js app

export const homePageQuery = `
{
  "settings": *[_type == "siteSettings"][0]{
    _id,
    title,
    description,
    brandName,
    brandTagline,
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
    performances[]{
      _key,
      date,
      time,
      location{
        name,
        street,
        postalCode,
        city,
        remarks
      }
    },
    gallery
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
}
`;

export const latestNewsQuery = `
*[_type == "newsPost"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  category
}
`;
