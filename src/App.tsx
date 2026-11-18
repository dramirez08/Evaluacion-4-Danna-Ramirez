import { SiteHeader } from './components/SiteHeader'
import { portfolioIdentity } from './data/portfolio'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <>
      <SiteHeader brand={portfolioIdentity.brand} />
      <main id="contenido-principal">
        <HomePage />
      </main>
    </>
  )
}
