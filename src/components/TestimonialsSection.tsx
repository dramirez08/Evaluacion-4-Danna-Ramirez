import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import { testimonials } from '../data/portfolio'
import type { SectionProps } from '../types/portfolio'
import './TestimonialsSection.css'

export function TestimonialsSection({ standalone = false }: SectionProps) {
  const [expanded, setExpanded] = useState<boolean>(standalone)
  const title = '♡⸝⸝ Opiniones de mis Clientes'

  function handleToggle(event: SyntheticEvent<HTMLDetailsElement>) {
    setExpanded(event.currentTarget.open)
  }

  return (
    <section className={`panel testimonials${standalone ? ' panel--standalone' : ''}`} aria-labelledby="titulo-testimonios">
      {standalone && <h1 id="titulo-testimonios" className="panel__title">{title}</h1>}
      <details className="testimonials__details" open={expanded} onToggle={handleToggle}>
        <summary className="testimonials__summary">
          {standalone ? 'Leer opiniones' : <h2 id="titulo-testimonios" className="panel__title">{title}</h2>}
        </summary>
        {testimonials.map(({ author, quote }) => (
          <figure className="testimonials__entry" key={author}>
            <blockquote><p>“{quote}”</p></blockquote>
            <figcaption className="testimonials__author">— {author}</figcaption>
          </figure>
        ))}
      </details>
    </section>
  )
}
