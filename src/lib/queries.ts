// GROQ queries for Sanity

// Plays
export const currentPlayQuery = `
  *[_type == "siteSettings"][0].currentPlay-> {
    _id,
    title,
    slug,
    coverImage,
    description,
    synopsis,
    author,
    director,
    year,
    cast[] {
      _key,
      actorName,
      roleName,
      photo
    },
    performances[] {
      _key,
      date,
      time,
      location {
        name,
        street,
        postalCode,
        city,
        remarks
      },
      ticketsAvailable,
      ticketPrices[] {
        _key,
        category,
        price,
        description
      }
    },
    gallery
  }
`

export const allPlaysQuery = `
  *[_type == "play"] | order(year desc) {
    _id,
    title,
    slug,
    coverImage,
    year,
    author
  }
`

export const archivedPlaysQuery = `
  *[_type == "play" && _id != *[_type == "siteSettings"][0].currentPlay._ref] | order(year desc) {
    _id,
    title,
    slug,
    coverImage,
    year,
    author
  }
`

export const playBySlugQuery = `
  *[_type == "play" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    coverImage,
    description,
    synopsis,
    author,
    director,
    year,
    cast[] {
      _key,
      actorName,
      roleName,
      photo
    },
    performances[] {
      _key,
      date,
      time,
      location {
        name,
        street,
        postalCode,
        city,
        remarks
      },
      ticketsAvailable,
      ticketPrices[] {
        _key,
        category,
        price,
        description
      }
    },
    gallery
  }
`

// News
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
`

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
`

export const newsBySlugQuery = `
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
`

// Team
export const teamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo
  }
`

// Site Settings
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    currentPlay,
    heroSubtitle,
    heroTitle,
    heroDescription,
    heroCtaText,
    heroCtaLink,
    heroSecondaryCtaText,
    heroSecondaryCtaLink,
    navCtaText,
    navCtaLink,
    contactEmail,
    contactPhone,
    addressStreet,
    addressPostalCode,
    addressCity,
    socialLinks,
    aboutTheaterName,
    aboutTagline,
    aboutDescription,
    aboutStory,
    statsYears,
    statsMembers,
    statsProductions,
    footerCtaTitle,
    footerCtaDescription,
    copyrightText
  }
`
