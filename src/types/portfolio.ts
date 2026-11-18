import type { ReactNode } from 'react'

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
  medium: ArtworkMedium
}

export type ArtworkMedium = 'digital' | 'traditional'
export type ArtworkFilter = ArtworkMedium | 'all'

export interface ArtworkFilterOption {
  value: ArtworkFilter
  label: string
}

export interface GalleryFilterProps {
  value: ArtworkFilter
  onChange: (value: ArtworkFilter) => void
  resultCount: number
}

export interface ArtworkViewerProps {
  artwork: Artwork
  index: number
  count: number
  onMove: (offset: number) => void
  onClose: () => void
}

export type Theme = 'dark' | 'light'

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export interface ThemeProviderProps {
  children: ReactNode
}

export type PreviewMode = 'tablet' | 'mobile'

export interface PreviewSize {
  mode: PreviewMode
  label: string
  width: number
}

export interface PreviewDialogProps {
  size: PreviewSize
  onSelect: (size: PreviewSize) => void
  onClose: () => void
}

export interface Testimonial {
  author: string
  quote: string
}

export interface ContactChannel {
  platform: string
  handle: string
}
