import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InteractivePage from './subsections/InteractivePage'
import Videogames from './subsections/Videogames'
import VideosAnimations from './subsections/VideosAnimations'
import Renders3D from './subsections/Renders3D'
import Illustrations from './subsections/Illustrations'
import styles from './ProjectsSection.module.css'

gsap.registerPlugin(ScrollTrigger)

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('interactive')
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const tabsRef = useRef(null)

  const categories = [
    { id: 'interactive', label: 'Página Interactiva', icon: '' },
    { id: 'videogames', label: 'Videojuegos', icon: '' },
    { id: 'videos', label: 'Videos & Animación', icon: '' },
    { id: 'renders', label: 'Renders 3D', icon: '' },
    { id: 'illustrations', label: 'Ilustraciones', icon: '' }
  ]

  useEffect(() => {
    console.log('ProjectsSection montado correctamente')
    gsap.fromTo(titleRef.current,
      { opacity: 1, x: 50 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo(tabsRef.current.children,
      { opacity: 1, y: 30 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tabsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  const renderContent = () => {
    switch (activeCategory) {
      case 'interactive':
        return <InteractivePage />
      case 'videogames':
        return <Videogames />
      case 'videos':
        return <VideosAnimations />
      case 'renders':
        return <Renders3D />
      case 'illustrations':
        return <Illustrations />
      default:
        return <InteractivePage />
    }
  }

  return (
    <section id="projects" ref={sectionRef} className={`${styles.projectsSection} section`}>
      <div className={styles.container}>
        {/* Formas vectoriales animadas */}
        <div className={`${styles.shape} ${styles.circle}`} style={{ top: '10%', left: '5%' }}></div>
        <div className={`${styles.shape} ${styles.triangle}`} style={{ bottom: '15%', right: '8%' }}></div>
        
        <h2 ref={titleRef} className={styles.title}>
          MIS <span className={styles.redText}>PROYECTOS</span>
        </h2>

        <div ref={tabsRef} className={styles.categoryTabs}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.tab} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className={styles.tabIcon}>{category.icon}</span>
              <span className={styles.tabLabel}>{category.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.contentContainer}>
          {renderContent()}
        </div>
      </div>

      <div className={styles.backgroundDecor}>
        <div className={styles.redBlur}></div>
      </div>
    </section>
  )
}

export default ProjectsSection
