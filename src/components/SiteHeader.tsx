import type { SiteHeaderProps } from '../types/portfolio'

export function SiteHeader({ brand }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <p className="site-header__brand">{brand}</p>
    </header>
  )
}
