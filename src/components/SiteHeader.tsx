import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Link, NavLink } from 'react-router-dom'
import type { NavLinkRenderProps } from 'react-router-dom'
import { useTheme } from '../context/theme'
import { navigationItems, profileImage } from '../data/portfolio'
import type { SiteHeaderProps } from '../types/portfolio'
import './SiteHeader.css'

export function SiteHeader({ brand }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const { theme, toggleTheme } = useTheme()

  function closeMenu() {
    if (menuOpen) {
      setMenuOpen(false)
      menuButton.current?.focus()
    }
  }

  function handleEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape') closeMenu()
  }

  return (
    <header className="site-header" onKeyDown={handleEscape}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" aria-label={`${brand}, inicio`} onClick={closeMenu}>
          <img src={profileImage} alt="" width="44" height="44" className="site-header__avatar" />
          <span>{brand}</span>
        </Link>
        <div className="site-header__controls">
          <button
            type="button"
            className="site-header__control"
            onClick={toggleTheme}
            aria-label="Tema claro"
            aria-pressed={theme === 'light'}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
          </button>
          <button
            type="button"
            className="site-header__control site-header__control--menu"
            ref={menuButton}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="navegacion-principal"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
        <nav
          id="navegacion-principal"
          aria-label="Navegación principal"
          className={`site-header__nav${menuOpen ? ' site-header__nav--open' : ''}`}
        >
          <ul className="site-header__links">
            {navigationItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  end={path === '/'}
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }: NavLinkRenderProps) => [
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
