# 🎨 Snippets y Componentes Extras

## 📌 Componentes Adicionales Útiles

### 1. Loading Spinner

Crea: `src/components/LoadingSpinner/LoadingSpinner.jsx`

```javascript
import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
```

`LoadingSpinner.module.css`:

```css
.spinnerContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
}

.spinner {
  display: flex;
  gap: 1rem;
}

.circle {
  width: 20px;
  height: 20px;
  background: var(--color-red-primary);
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite;
}

.circle:nth-child(1) { animation-delay: 0s; }
.circle:nth-child(2) { animation-delay: 0.2s; }
.circle:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
```

---

### 2. Modal para Proyectos

Crea: `src/components/ProjectModal/ProjectModal.jsx`

```javascript
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './ProjectModal.module.css'

const ProjectModal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      gsap.from(modalRef.current, {
        opacity: 0,
        duration: 0.3
      })
      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
      })
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleClose = () => {
    gsap.to(contentRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.3
    })
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: onClose
    })
  }

  return (
    <div 
      ref={modalRef} 
      className={styles.modalOverlay}
      onClick={handleClose}
    >
      <div 
        ref={contentRef} 
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          ✕
        </button>

        {project.image && (
          <img 
            src={project.image} 
            alt={project.title}
            className={styles.projectImage}
          />
        )}

        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>

        {project.technologies && (
          <div className={styles.techStack}>
            {project.technologies.map((tech, i) => (
              <span key={i} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
        )}

        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            Ver Proyecto →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectModal
```

`ProjectModal.module.css`:

```css
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
}

.modalContent {
  background: var(--color-black-soft);
  border: 2px solid var(--color-red-primary);
  border-radius: 25px;
  padding: 3rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.closeButton {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  background: var(--color-red-primary);
  border: none;
  border-radius: 50%;
  color: var(--color-white);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.closeButton:hover {
  transform: rotate(90deg);
  background: var(--color-red-bright);
}

.projectImage {
  width: 100%;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  color: var(--color-white);
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-gray-light);
  margin-bottom: 2rem;
}

.techStack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.techBadge {
  padding: 0.5rem 1rem;
  background: var(--color-black-lighter);
  border: 1px solid var(--color-red-primary);
  border-radius: 15px;
  font-size: 0.9rem;
  color: var(--color-red-primary);
}

.projectLink {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--color-red-primary);
  border-radius: 30px;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--color-white);
  text-decoration: none;
  transition: all var(--transition-normal);
}

.projectLink:hover {
  background: var(--color-red-bright);
  transform: translateY(-3px);
}
```

---

### 3. Scroll Progress Bar

Crea: `src/components/ScrollProgress/ScrollProgress.jsx`

```javascript
import { useEffect, useState } from 'react'
import styles from './ScrollProgress.module.css'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className={styles.scrollProgress}>
      <div 
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
```

`ScrollProgress.module.css`:

```css
.scrollProgress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--color-black-lighter);
  z-index: 9999;
}

.progressBar {
  height: 100%;
  background: linear-gradient(90deg, 
    var(--color-red-primary) 0%, 
    var(--color-red-bright) 100%
  );
  transition: width 0.1s ease-out;
}
```

**Uso en App.jsx**:

```javascript
import ScrollProgress from './components/ScrollProgress/ScrollProgress'

function App() {
  return (
    <>
      <ScrollProgress />
      {/* resto del contenido */}
    </>
  )
}
```

---

### 4. Back to Top Button

Crea: `src/components/BackToTop/BackToTop.jsx`

```javascript
import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import styles from './BackToTop.module.css'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1,
      ease: 'power3.inOut'
    })
  }

  if (!isVisible) return null

  return (
    <button 
      className={styles.backToTop}
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  )
}

export default BackToTop
```

`BackToTop.module.css`:

```css
.backToTop {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 60px;
  height: 60px;
  background: var(--color-red-primary);
  border: 2px solid var(--color-red-primary);
  border-radius: 50%;
  color: var(--color-white);
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000;
  transition: all var(--transition-normal);
  animation: fadeIn 0.3s ease-in;
  box-shadow: 0 10px 30px rgba(230, 57, 70, 0.4);
}

.backToTop:hover {
  background: var(--color-red-bright);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(230, 57, 70, 0.6);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .backToTop {
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}
```

---

## 🎨 Animaciones GSAP Personalizadas

### Hover 3D Card Effect

```javascript
const cardRef = useRef(null)

const handleMouseMove = (e) => {
  const card = cardRef.current
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10
  
  gsap.to(card, {
    rotateX: rotateX,
    rotateY: rotateY,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const handleMouseLeave = () => {
  gsap.to(cardRef.current, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.5,
    ease: 'power2.out'
  })
}

// En el componente
<div 
  ref={cardRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  style={{ transformStyle: 'preserve-3d' }}
>
  {/* contenido */}
</div>
```

### Text Scramble Effect

```javascript
const scrambleText = (element, finalText) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
  let iteration = 0
  
  const interval = setInterval(() => {
    element.textContent = finalText
      .split('')
      .map((char, index) => {
        if (index < iteration) return finalText[index]
        return chars[Math.floor(Math.random() * chars.length)]
      })
      .join('')
    
    if (iteration >= finalText.length) clearInterval(interval)
    iteration += 1 / 3
  }, 30)
}

// Uso
const titleRef = useRef(null)

useEffect(() => {
  scrambleText(titleRef.current, 'MULTIMEDIA')
}, [])
```

### Image Reveal on Scroll

```javascript
useEffect(() => {
  gsap.from('.image-reveal', {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1.5,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.image-reveal',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })
}, [])
```

---

## 🎯 Custom Hooks Útiles

### useScrollDirection

Crea: `src/hooks/useScrollDirection.js`

```javascript
import { useState, useEffect } from 'react'

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScroll ? 'down' : 'up'
      
      if (direction !== scrollDirection && 
          Math.abs(scrollY - lastScroll) > 10) {
        setScrollDirection(direction)
      }
      
      setLastScroll(scrollY)
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [scrollDirection, lastScroll])

  return scrollDirection
}

// Uso
const scrollDirection = useScrollDirection()

// Ocultar navbar al hacer scroll down
<nav className={scrollDirection === 'down' ? 'hidden' : 'visible'}>
```

### useIntersectionObserver

```javascript
import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [options])

  return [elementRef, isVisible]
}

// Uso
const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 })

<div ref={ref} className={isVisible ? 'animate' : ''}>
```

---

## 🚀 Comandos Útiles de Git

```bash
# Inicializar repositorio
git init
git add .
git commit -m "Initial commit: Portafolio multimedia"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/tu-usuario/portafolio.git
git branch -M main
git push -u origin main

# Workflow diario
git add .
git commit -m "Descripción del cambio"
git push

# Ver cambios
git status
git diff

# Crear nueva rama para experimentos
git checkout -b experimental-feature
git checkout main  # Volver a main
```

---

¡Con estos componentes extras tu portafolio será aún más profesional! 🎉
