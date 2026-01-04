// GROQ queries for Sanity

// Plays
export const currentPlayQuery = `
  *[_type == "play" && isCurrent == true][0] {
    _id,
    title,
    slug,
    coverImage,
    description,
    synopsis,
    author,
    director,
    year,
    isCurrent,
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
      location,
      ticketsAvailable
    },
    ticketPrices[] {
      _key,
      category,
      price,
      description
    },
    gallery
  }
`;

export const allPlaysQuery = `
  *[_type == "play"] | order(year desc) {
    _id,
    title,
    slug,
    coverImage,
    year,
    isCurrent,
    author
  }
`;

export const archivedPlaysQuery = `
  *[_type == "play" && isCurrent != true] | order(year desc) {
    _id,
    title,
    slug,
    coverImage,
    year,
    author
  }
`;

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
    isCurrent,
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
      location,
      ticketsAvailable
    },
    ticketPrices[] {
      _key,
      category,
      price,
      description
    },
    gallery
  }
`;

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
`;

// Team
export const teamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo
  }
`;

// Site Settings
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    contactEmail,
    contactPhone,
    address,
    socialLinks
  }
`;
