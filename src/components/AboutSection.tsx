import type { SectionProps } from '../types/portfolio'

export function AboutSection({ standalone = false }: SectionProps) {
  const Heading = standalone ? 'h1' : 'h2'

  return (
    <section className={`panel${standalone ? ' panel--standalone' : ''}`} aria-labelledby="titulo-sobre-mi">
      <Heading id="titulo-sobre-mi" className="panel__title">♡⸝⸝ Sobre mí</Heading>
      <p className="panel__paragraph">Me encanta dibujar personajes con carisma, mi fortaleza es plasmar personajes femeninos y utilizo una paleta de colores fríos intensos. La creación de personajes es lo mío ♡</p>
      <p className="panel__paragraph">Hago ilustraciones digitales y tradicionales por encargo. Si te gustó algo de la galería, mira los precios y los slots disponibles.</p>
    </section>
  )
}
