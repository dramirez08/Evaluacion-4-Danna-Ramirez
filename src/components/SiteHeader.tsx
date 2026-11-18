import { Link, NavLink } from 'react-router-dom'
import { navigationItems, profileImage } from '../data/portfolio'
import type { SiteHeaderProps } from '../types/portfolio'
import './SiteHeader.css'

export function SiteHeader({ brand }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" aria-label={`${brand}, inicio`}>
          <img src={profileImage} alt="" width="44" height="44" className="site-header__avatar" />
          <span>{brand}</span>
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="site-header__links">
            {navigationItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  end={path === '/'}
                  to={path}
                  className={({ isActive }) => [
                    'site-header__link',
                    path === '/comisiones' && 'site-header__link--commissions',
                    isActive && 'site-header__link--active',
                  ].filter(Boolean).join(' ')}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
