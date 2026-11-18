import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="panel panel--standalone" aria-labelledby="titulo-404">
      <h1 id="titulo-404" className="panel__title">404 · Página no encontrada</h1>
      <Link to="/" className="button button--centered">Volver al inicio</Link>
    </section>
  )
}
