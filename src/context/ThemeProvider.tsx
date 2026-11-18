import { useEffect, useState } from 'react'
import type { Theme, ThemeProviderProps } from '../types/portfolio'
import { ThemeContext } from './theme'

const storageKey = 'danna-portafolio-tema'

function readTheme(): Theme {
  try {
    return localStorage.getItem(storageKey) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(storageKey, theme)
    } catch {
      // El tema sigue disponible en memoria si el navegador bloquea el almacenamiento.
    }
  }, [theme])

  useEffect(() => {
    function syncTheme(event: StorageEvent) {
      if (event.key === storageKey) setTheme(readTheme())
    }
    window.addEventListener('storage', syncTheme)
    return () => window.removeEventListener('storage', syncTheme)
  }, [])

  function toggleTheme() {
    setTheme((current) => current === 'dark' ? 'light' : 'dark')
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
