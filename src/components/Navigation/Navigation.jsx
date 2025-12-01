import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={scrollToTop}>
          <img src="/images/logo.svg" alt="Logo" className={styles.logoImage} />
        </div>

        <ul className={styles.navLinks}>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? styles.active : ''}
            >
              QUIÉN SOY
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? styles.active : ''}
            >
              PROYECTOS
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('tech')}
              className={activeSection === 'tech' ? styles.active : ''}
            >
              TECNOLOGÍAS
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? styles.active : ''}
            >
              CONTACTO
            </button>
          </li>
        </ul>

        <div className={styles.redLine}></div>
      </div>
    </nav>
  )
}

export default Navigation
