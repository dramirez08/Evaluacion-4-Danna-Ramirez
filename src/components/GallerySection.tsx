import { useState } from 'react'
import { artworks } from '../data/portfolio'
import type { ArtworkFilter, SectionProps } from '../types/portfolio'
import { ArtworkViewer } from './ArtworkViewer'
import { GalleryFilter } from './GalleryFilter'
import './GallerySection.css'

export function GallerySection({ standalone = false }: SectionProps) {
  const [filter, setFilter] = useState<ArtworkFilter>('all')
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const visible = filter === 'all' ? artworks : artworks.filter(({ medium }) => medium === filter)
  const selectedIndex = visible.findIndex(({ id }) => id === selectedId)
  const selected = visible[selectedIndex]
  const Heading = standalone ? 'h1' : 'h2'

  function moveSelection(offset: number) {
    const index = (selectedIndex + offset + visible.length) % visible.length
    setSelectedId(visible[index].id)
  }

  return (
    <section className={`panel${standalone ? ' panel--standalone' : ''}`} aria-labelledby="titulo-galeria">
      <Heading id="titulo-galeria" className="panel__title">⤷ ゛ Mi Galería de Dibujos ˎˊ˗</Heading>
      <GalleryFilter value={filter} onChange={setFilter} resultCount={visible.length} />
      <ul className="gallery">
        {visible.map(({ id, image, alt }) => (
          <li key={id}>
            <button type="button" className="gallery__item" aria-label={`Abrir visor: ${alt}`} onClick={() => setSelectedId(id)}>
              <img className="gallery__image" src={image} alt={alt} loading="lazy" />
            </button>
          </li>
        ))}
      </ul>
      {selected && (
        <ArtworkViewer artwork={selected} index={selectedIndex} count={visible.length} onMove={moveSelection} onClose={() => setSelectedId(null)} />
      )}
    </section>
  )
}
