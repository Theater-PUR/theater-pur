// Sanity document types

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanityBlock {
  _type: 'block'
  _key: string
  style?: string
  children: Array<{
    _type: 'span'
    _key: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    href?: string
  }>
}

export interface CastMember {
  _key: string
  actorName: string
  roleName: string
  photo?: SanityImage
}

export interface Location {
  name?: string
  street?: string
  postalCode?: string
  city?: string
  remarks?: string
}

export interface TicketPrice {
  _key: string
  category: string
  price: number
  description?: string
}

export interface Performance {
  _key: string
  date: string
  time: string
  location?: Location
  ticketsAvailable?: number
  ticketPrices?: TicketPrice[]
}

export interface Play {
  _id: string
  _type: 'play'
  title: string
  slug: SanitySlug
  coverImage: SanityImage
  description: SanityBlock[]
  synopsis?: SanityBlock[]
  author?: string
  director?: string
  year: number
  cast: CastMember[]
  performances: Performance[]
  gallery?: SanityImage[]
}

export interface NewsPost {
  _id: string
  _type: 'newsPost'
  title: string
  slug: SanitySlug
  excerpt: string
  coverImage?: SanityImage
  content: SanityBlock[]
  publishedAt: string
  category?: string
}

export interface TeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  role: string
  bio?: SanityBlock[]
  photo?: SanityImage
  order: number
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  title: string
  description: string
  contactEmail: string
  contactPhone?: string
  address?: string
  socialLinks?: {
    facebook?: string
    instagram?: string
    youtube?: string
  }
  currentPlay?: {
    _ref: string
    _type: 'reference'
  }
}
