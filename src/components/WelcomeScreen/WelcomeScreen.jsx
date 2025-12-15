import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import styles from './WelcomeScreen.module.css'

const WelcomeScreen = ({ onEnter }) => {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const textRef = useRef(null)
  const themeToggleRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    console.log('WelcomeScreen montado, iniciando animaciones...')
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      const isDarkTheme = savedTheme === 'dark'
      setIsDark(isDarkTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
    
    // Asegurar que los elementos sean visibles primero
    gsap.set(logoRef.current, { opacity: 1, scale: 1 })
    gsap.set(textRef.current, { opacity: 1 })
    gsap.set(themeToggleRef.current, { opacity: 1 })

    // Animación de entrada del logo
    const tl = gsap.timeline()

    tl.from(logoRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out'
    })
    .from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .from(themeToggleRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    .to(textRef.current, {
      opacity: 0.7,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    return () => {
      tl.kill()
    }
  }, [])

  const handleInteraction = () => {
    console.log('Click detectado! isAnimating:', isAnimating)
    
    if (isAnimating) {
      console.log('Ya hay una animación en progreso')
      return
    }

    setIsAnimating(true)
    console.log('Iniciando transición de salida...')
    
    // Animación de salida épica
    const tl = gsap.timeline({
      onComplete: () => {
        console.log('Transición completada, llamando onEnter')
        onEnter()
      }
    })

    tl.to(textRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.3,
      ease: 'power2.in'
    })
    .to(logoRef.current, {
      scale: 15,
      opacity: 0,
      rotation: 0,
      duration: 1.2,
      ease: 'power4.inOut'
    }, '-=0.1')
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    }, '-=0.6')
  }

  const handleWheel = (e) => {
    handleInteraction()
  }

  const toggleTheme = (e) => {
    e.stopPropagation() // Evitar que active handleInteraction
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div 
      ref={containerRef}
      className={styles.welcomeScreen}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
      onWheel={handleWheel}
    >
      <button 
        ref={themeToggleRef}
        onClick={toggleTheme}
        className={styles.themeToggle}
        aria-label="Cambiar tema"
      >
        {isDark ? (
          <img src="/images/figura-luna-mejorado.svg" alt="Modo Nocturno" className={styles.themeIcon} />
        ) : (
          <img src="/images/figura-sol2-mejorado.svg" alt="Modo Claro" className={styles.themeIcon} />
        )}
      </button>

      <div className={styles.content}>
        <div ref={logoRef} className={styles.logo}>
          <img src="/images/logo.svg" alt="Michael Logo" className={styles.logoSvg} />
        </div>

        <div ref={textRef} className={styles.interactionText}>
          <p>TAP / SCROLL / CLICK PARA ENTRAR</p>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen
