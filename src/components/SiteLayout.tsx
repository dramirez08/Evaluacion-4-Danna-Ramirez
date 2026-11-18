import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { portfolioIdentity } from '../data/portfolio'
import { ResponsivePreview } from './ResponsivePreview'
import { SiteHeader } from './SiteHeader'
import './SiteLayout.css'

export function SiteLayout() {
  const { pathname } = useLocation()
  const previousPath = useRef(pathname)
  const main = useRef<HTMLElement>(null)

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname
      window.scrollTo({ top: 0 })
      main.current?.focus({ preventScroll: true })
    }
  }, [pathname])

  return (
    <div className="site-layout">
      <button type="button" className="site-layout__skip" onClick={() => main.current?.focus()}>
        Saltar al contenido
      </button>
      <SiteHeader brand={portfolioIdentity.brand} />
      <main className="site-layout__main" id="contenido-principal" tabIndex={-1} ref={main}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© 2026 Danna Ramirez | Ilustraciones y comisiones ⸜(｡˃ ᵕ ˂ )⸝♡</p>
      </footer>
      <ResponsivePreview />
    </div>
  )
}
