import { artworks } from '../data/portfolio'
import type { SectionProps } from '../types/portfolio'
import './GallerySection.css'

export function GallerySection({ standalone = false }: SectionProps) {
  const Heading = standalone ? 'h1' : 'h2'

  return (
    <section className={`panel${standalone ? ' panel--standalone' : ''}`} aria-labelledby="titulo-galeria">
      <Heading id="titulo-galeria" className="panel__title">⤷ ゛ Mi Galería de Dibujos ˎˊ˗</Heading>
      <ul className="gallery">
        {artworks.map(({ id, image, alt }) => (
          <li key={id}><img className="gallery__image" src={image} alt={alt} loading="lazy" /></li>
        ))}
      </ul>
    </section>
  )
}
