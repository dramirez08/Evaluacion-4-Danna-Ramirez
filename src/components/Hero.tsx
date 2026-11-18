import { Link } from 'react-router-dom'
import { heroImages, portfolioIdentity } from '../data/portfolio'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="titulo-hero">
      <div className="hero__background" aria-hidden="true">
        {heroImages.map((image) => <img key={image} src={image} alt="" className="hero__slide" />)}
      </div>
      <div className="hero__content">
        <p className="hero__label">Artista digital</p>
        <h1 className="hero__title" id="titulo-hero">{portfolioIdentity.artistName}</h1>
        <p className="hero__subtitle">Ilustraciones con cariño cuando tengo tiempo libre</p>
        <div className="hero__actions">
          <Link to="/galeria" className="button">Ver galería</Link>
          <Link to="/comisiones" className="button button--outline">Solicitar comisión</Link>
        </div>
      </div>
    </section>
  )
}
