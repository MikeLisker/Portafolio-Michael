import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './TechSection.module.css'

gsap.registerPlugin(ScrollTrigger)

const TechSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const gridRef = useRef(null)

  const technologies = [
    { id: 1, name: 'React', category: 'Frontend', icon: '', color: '#61DAFB' },
    { id: 2, name: 'GSAP', category: 'Animation', icon: '', color: '#88CE02' },
    { id: 3, name: 'Three.js', category: '3D', icon: '', color: '#000000' },
    { id: 4, name: 'Adobe After Effects', category: 'Motion', icon: '', color: '#9999FF' },
    { id: 5, name: 'Adobe Photoshop', category: 'Design', icon: '', color: '#31A8FF' },
    { id: 6, name: 'Adobe Illustrator', category: 'Design', icon: '', color: '#FF9A00' },
    { id: 7, name: 'Maya', category: '3D', icon: '', color: '#37BDB2' },
    { id: 8, name: 'Blender', category: '3D', icon: '', color: '#F5792A' },
    { id: 9, name: 'Unity', category: 'Game Dev', icon: '', color: '#FFFFFF' },
    { id: 10, name: 'Unreal Engine', category: 'Game Dev', icon: '', color: '#0E1128' },
    { id: 11, name: 'VS Code', category: 'Dev Tools', icon: '', color: '#007ACC' },
    { id: 12, name: 'Git', category: 'Dev Tools', icon: '', color: '#F05032' },
    { id: 13, name: 'Figma', category: 'Design', icon: '', color: '#F24E1E' },
    { id: 14, name: 'Premiere Pro', category: 'Video', icon: '', color: '#9999FF' },
    { id: 15, name: 'Substance Painter', category: '3D', icon: '', color: '#FF6B00' }
  ]

  useEffect(() => {
    console.log('TechSection montado correctamente')
    gsap.fromTo(titleRef.current,
      { opacity: 1, x: -50 },
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

    gsap.fromTo(gridRef.current.children,
      { opacity: 1, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        stagger: {
          each: 0.08,
          from: 'random'
        },
        duration: 0.8,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Animación de pulso continuo en algunos logos
    const cards = gridRef.current.querySelectorAll(`.${styles.techCard}`)
    cards.forEach((card, i) => {
      if (i % 3 === 0) {
        gsap.to(card, {
          scale: 1.05,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3
        })
      }
    })
  }, [])

  return (
    <section id="tech" ref={sectionRef} className={`${styles.techSection} section`}>
      <div className={styles.container}>
        {/* Formas vectoriales animadas */}
        <div className={`${styles.shape} ${styles.square}`} style={{ top: '8%', right: '12%' }}></div>
        <div className={`${styles.shape} ${styles.circle}`} style={{ bottom: '12%', left: '10%' }}></div>
        
        <h2 ref={titleRef} className={styles.title}>
          <span className={styles.redText}>TECNOLOGÍAS</span> & HERRAMIENTAS
        </h2>

        <div ref={gridRef} className={styles.techGrid}>
          {technologies.map((tech) => (
            <div 
              key={tech.id} 
              className={styles.techCard}
              style={{ '--hover-color': tech.color }}
            >
              <div className={styles.cardInner}>
                <div className={styles.iconWrapper}>
                  <span className={styles.techIcon}>{tech.icon}</span>
                </div>
                
                <h3 className={styles.techName}>{tech.name}</h3>
                <span className={styles.category}>{tech.category}</span>

                <div className={styles.glowEffect}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.backgroundDecor}>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
      </div>
    </section>
  )
}

export default TechSection
