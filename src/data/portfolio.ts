import art1 from '../assets/ilustraciones/1.jpeg'
import art2 from '../assets/ilustraciones/2.png'
import art3 from '../assets/ilustraciones/3.jpeg'
import art4 from '../assets/ilustraciones/4.png'
import art5 from '../assets/ilustraciones/5.jpeg'
import art6 from '../assets/ilustraciones/6.jpeg'
import art7 from '../assets/ilustraciones/7.jpeg'
import art8 from '../assets/ilustraciones/8.png'
import art9 from '../assets/ilustraciones/9.jpg'
import art10 from '../assets/ilustraciones/10.jpeg'
import art11 from '../assets/ilustraciones/11.png'
import art12 from '../assets/ilustraciones/12.png'
import art13 from '../assets/ilustraciones/13.jpeg'
import art14 from '../assets/ilustraciones/14.jpeg'
import art15 from '../assets/ilustraciones/15.jpeg'
import art16 from '../assets/ilustraciones/16.jpeg'
import art17 from '../assets/ilustraciones/17.jpeg'
import art18 from '../assets/ilustraciones/18.jpeg'
import icon from '../assets/ilustraciones/icon.jpg'
import type { Artwork, ArtworkFilterOption, ContactChannel, NavigationItem, PortfolioIdentity, PreviewSize, Testimonial } from '../types/portfolio'

export const portfolioIdentity: PortfolioIdentity = {
  artistName: 'Danna',
  brand: 'Danna | Artista Digital',
}

export const profileImage = icon
export const heroImages: readonly string[] = [art7, art14, art6, art1]

export const navigationItems: readonly NavigationItem[] = [
  { path: '/', label: 'Inicio' },
  { path: '/galeria', label: 'Galería' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/sobre-mi', label: 'Sobre mí' },
  { path: '/testimonios', label: 'Testimonios' },
  { path: '/contacto', label: 'Contacto' },
  { path: '/comisiones', label: 'Comisiones' },
]

export const artworks: readonly Artwork[] = [
  { id: 3, image: art3, alt: 'Ilustración de Dayko', medium: 'digital' },
  { id: 1, image: art1, alt: 'Ilustración de Varesa', medium: 'digital' },
  { id: 2, image: art2, alt: 'Icono con solo lineart', medium: 'digital' },
  { id: 4, image: art4, alt: 'Dayko bailando con su chico', medium: 'digital' },
  { id: 5, image: art5, alt: 'Ilustración de Mabel', medium: 'digital' },
  { id: 6, image: art6, alt: 'Ilustración de Varesa tomando batido de frutillas', medium: 'digital' },
  { id: 7, image: art7, alt: 'Ilustración de Vitsenya Halloween', medium: 'digital' },
  { id: 8, image: art8, alt: 'Ilustración de un personaje para Blue Archive', medium: 'digital' },
  { id: 9, image: art9, alt: 'Ilustración tradicional de Lula', medium: 'traditional' },
  { id: 10, image: art10, alt: 'Dayko en la playa', medium: 'digital' },
  { id: 11, image: art11, alt: 'Dayko abejita', medium: 'digital' },
  { id: 12, image: art12, alt: 'Ilustración para el año nuevo chino del dragón 2024', medium: 'digital' },
  { id: 13, image: art13, alt: 'Ilustración de Ronova de Genshin Impact', medium: 'digital' },
  { id: 14, image: art14, alt: 'Ilustración de Umamusume', medium: 'digital' },
  { id: 15, image: art15, alt: 'Ilustración de Elyra', medium: 'digital' },
  { id: 16, image: art16, alt: 'Ilustración de Lorina', medium: 'digital' },
  { id: 17, image: art17, alt: 'Ilustración de Prickect', medium: 'digital' },
  { id: 18, image: art18, alt: 'Ilustración de Alice junto a Grimm', medium: 'digital' },
]

export const artworkFilters: readonly ArtworkFilterOption[] = [
  { value: 'all', label: 'Todas' },
  { value: 'digital', label: 'Digital' },
  { value: 'traditional', label: 'Tradicional' },
]

export const previewSizes: readonly PreviewSize[] = [
  { mode: 'tablet', label: 'Tablet', width: 768 },
  { mode: 'mobile', label: 'Celular', width: 390 },
]

export const testimonials: readonly Testimonial[] = [
  { author: '@Psilocinxg', quote: 'Danna captó exactamente lo que quería, el dibujo quedó perfecto 💖' },
  { author: '@Kyumio', quote: 'Hermosa paleta de colores y atención a los detalles! 100% recomendada, me encantó ꉂ(˵˃ ᗜ ˂˵)' },
]

export const contactChannels: readonly ContactChannel[] = [
  { platform: 'Discord', handle: '@dramirez' },
  { platform: 'Instagram', handle: '@lunat1k' },
  { platform: 'TikTok', handle: '@lunat1k' },
]
