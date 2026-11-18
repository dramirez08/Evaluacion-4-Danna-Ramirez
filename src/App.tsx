import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { GallerySection } from './components/GallerySection'
import { SiteLayout } from './components/SiteLayout'
import { TestimonialsSection } from './components/TestimonialsSection'
import { CommissionsPage } from './pages/CommissionsPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="galeria" element={<GallerySection standalone />} />
          <Route path="sobre-mi" element={<AboutSection standalone />} />
          <Route path="testimonios" element={<TestimonialsSection standalone />} />
          <Route path="contacto" element={<ContactSection standalone />} />
          <Route path="comisiones" element={<CommissionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
