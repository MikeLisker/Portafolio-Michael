import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './ScrollFigureLuna.module.css'

gsap.registerPlugin(ScrollTrigger)

const ScrollFigureLuna = () => {
  const figureRef = useRef(null)

  useEffect(() => {
    // Animación de escala basada en scroll
    gsap.fromTo(figureRef.current, 
      {
        scale: 0.8
      },
      {
        scale: 1.2,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      }
    )

    // Pequeño efecto de flotación
    gsap.to(figureRef.current, {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }, [])

  return (
    <div className={styles.scrollFigureContainer}>
      <img 
        ref={figureRef}
        src="/images/figura-luna.svg" 
        alt="Figura luna decorativa"
        className={styles.scrollFigure}
      />
    </div>
  )
}

export default ScrollFigureLuna
