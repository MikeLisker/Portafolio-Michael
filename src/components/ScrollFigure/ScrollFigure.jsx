import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './ScrollFigure.module.css'

gsap.registerPlugin(ScrollTrigger)

const ScrollFigure = () => {
  const figureRef = useRef(null)

  useEffect(() => {
    // Animación de rotación continua basada en scroll
    gsap.to(figureRef.current, {
      rotation: 360,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Suaviza la animación con el scroll
      }
    })

    // Pequeño efecto de flotación
    gsap.to(figureRef.current, {
      y: 30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }, [])

  return (
    <div className={styles.scrollFigureContainer}>
      <img 
        ref={figureRef}
        src="/images/figura-sol2.svg" 
        alt="Figura decorativa"
        className={styles.scrollFigure}
      />
    </div>
  )
}

export default ScrollFigure
