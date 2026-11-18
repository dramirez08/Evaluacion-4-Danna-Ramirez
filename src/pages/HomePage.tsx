import { AboutSection } from '../components/AboutSection'
import { ContactSection } from '../components/ContactSection'
import { GallerySection } from '../components/GallerySection'
import { Hero } from '../components/Hero'
import { TestimonialsSection } from '../components/TestimonialsSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="container">
        <GallerySection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  )
}
