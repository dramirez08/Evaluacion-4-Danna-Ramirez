import { createContext, useContext } from 'react'
import type { ThemeContextValue } from '../types/portfolio'

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme requiere un ThemeProvider.')
  return context
}
