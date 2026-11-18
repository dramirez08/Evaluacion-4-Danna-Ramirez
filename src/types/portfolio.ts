export interface PortfolioIdentity {
  artistName: string
  brand: string
}

export interface SiteHeaderProps {
  brand: string
}

export interface NavigationItem {
  path: string
  label: string
}

export interface SectionProps {
  standalone?: boolean
}

export interface Artwork {
  id: number
  image: string
  alt: string
}

export interface Testimonial {
  author: string
  quote: string
}

export interface ContactChannel {
  platform: string
  handle: string
}

export interface CommissionPrice {
  type: string
  digital: number
  traditional: number
}
