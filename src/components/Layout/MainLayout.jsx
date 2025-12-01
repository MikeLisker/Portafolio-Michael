import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '../Navigation/Navigation'
import ScrollFigure from '../ScrollFigure/ScrollFigure'
import ScrollFigureLuna from '../ScrollFigureLuna/ScrollFigureLuna'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import styles from './MainLayout.module.css'

gsap.registerPlugin(ScrollTrigger)

const MainLayout = ({ children }) => {
  useEffect(() => {
    console.log('MainLayout montado correctamente')
    // Animación de entrada del layout principal
    gsap.utils.toArray('.section').forEach((section, index) => {
      gsap.fromTo(section, 
        { opacity: 1, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      )
    })
  }, [])

  return (
    <div className={styles.mainLayout}>
      <Navigation />
      <ScrollFigure />
      <ScrollFigureLuna />
      <ScrollToTop />
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>© 2025 Ingeniero en Multimedia. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default MainLayout
