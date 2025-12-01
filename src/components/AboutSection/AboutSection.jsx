import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './AboutSection.module.css'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const decorRef = useRef(null)

  useEffect(() => {
    console.log('AboutSection montado correctamente')
    const ctx = gsap.context(() => {
      // Animación del título
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

      // Animación del texto
      gsap.fromTo(textRef.current.children,
        { opacity: 1, y: 30 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Animación de la imagen
      gsap.fromTo(imageRef.current,
        { opacity: 1, scale: 0.95, rotation: -5 },
        {
          scale: 1,
          opacity: 1,
          rotation: -5,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Elemento decorativo flotante
      gsap.to(decorRef.current, {
        y: 30,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
      // Animación del título
      gsap.from(titleRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      })

      // Animación del texto
      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      // Animación de la imagen
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        rotation: -10,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })

      // Elemento decorativo flotante
      gsap.to(decorRef.current, {
        y: 30,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className={`${styles.aboutSection} section`}>
      <div className={styles.container}>
        

        {/* Formas vectoriales animadas */}
        <div className={`${styles.shape} ${styles.circle}`} style={{ top: '5%', right: '10%' }}></div>
        <div className={`${styles.shape} ${styles.square}`} style={{ bottom: '10%', left: '5%' }}></div>

        <div className={styles.contentGrid}>
          <div className={styles.textContent}>
            <h2 ref={titleRef} className={styles.title}>
              QUIÉN <span className={styles.redText}>SOY</span>
            </h2>

            <div ref={textRef} className={styles.description}>
              <p className={styles.mainText}>
                Soy <strong className={styles.highlight}>Ingeniero en Multimedia</strong>, 
                especializado en crear experiencias digitales que fusionan tecnología, 
                arte y narrativa.
              </p>
              
              <p>
                Mi pasión está en transformar ideas complejas en productos interactivos 
                que conectan emocionalmente con las personas. Desde animaciones cinemáticas 
                hasta videojuegos inmersivos, mi trabajo busca siempre <em>innovar y sorprender</em>.
              </p>

              <p>
                Domino herramientas de <span className={styles.redText}>desarrollo web avanzado</span>, 
                <span className={styles.redText}> modelado 3D</span>, 
                <span className={styles.redText}> motion graphics</span> y 
                <span className={styles.redText}> desarrollo de videojuegos</span>. 
                Cada proyecto es una oportunidad para explorar nuevos límites creativos y técnicos.
              </p>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5+</span>
                  <span className={styles.statLabel}>Años de experiencia</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Proyectos completados</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>∞</span>
                  <span className={styles.statLabel}>Ideas creativas</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageContent} ref={imageRef}>
            <div className={styles.imageWrapper}>
              {/* Reemplaza con tu ilustración personal */}
              <div className={styles.placeholderImage}>
                <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                  {/* Placeholder - reemplazar con tu ilustración */}
                  <rect width="400" height="500" fill="var(--color-black-lighter)"/>
                  <rect x="120" y="250" width="160" height="200" rx="20" fill="var(--color-red-primary)" opacity="0.2"/>
                  <text 
                    x="50%" 
                    y="50%" 
                    textAnchor="middle" 
                    fill="var(--color-gray)" 
                    fontSize="20"
                    fontFamily="var(--font-body)"
                  >
                    Tu ilustración aquí
                  </text>
                </svg>
              </div>
              
              <div className={styles.imageBorder}></div>
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.backgroundPattern}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
