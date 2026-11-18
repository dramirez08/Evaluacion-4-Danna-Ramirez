import { Link } from 'react-router-dom'
import { contactChannels } from '../data/portfolio'
import type { SectionProps } from '../types/portfolio'
import './ContactSection.css'

export function ContactSection({ standalone = false }: SectionProps) {
  const Heading = standalone ? 'h1' : 'h2'

  return (
    <section className={`panel contact${standalone ? ' panel--standalone' : ''}`} aria-labelledby="titulo-contacto">
      <Heading id="titulo-contacto" className="panel__title">♡⸝⸝ Contacto</Heading>
      <p className="panel__paragraph">Escríbeme por Discord, Instagram o TikTok, o envía tu solicitud directamente.</p>
      <ul className="contact__channels">
        {contactChannels.map(({ platform, handle }) => <li key={platform}>{platform}: {handle}</li>)}
      </ul>
      <Link to="/comisiones" className="button button--centered">˚₊‧꒰ა Solicitar una Comisión ໒꒱ ‧₊˚</Link>
    </section>
  )
}
