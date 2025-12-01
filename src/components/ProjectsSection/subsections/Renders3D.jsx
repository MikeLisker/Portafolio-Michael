import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import styles from './Renders3D.module.css'
import rendersData from '../../../data/renders3D.json'

const Renders3D = () => {
  const containerRef = useRef(null)
  const gridRef = useRef(null)
  const [selectedRender, setSelectedRender] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 1 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      }
    )

    gsap.fromTo(gridRef.current.children,
      { opacity: 1, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%'
        }
      }
    )
  }, [])

  useEffect(() => {
    if (selectedRender) {
      document.body.style.overflow = 'hidden'
      setCurrentImageIndex(0)
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedRender])

  const openModal = (render) => {
    setSelectedRender(render)
  }

  const closeModal = () => {
    setSelectedRender(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedRender && selectedRender.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedRender.images.length)
    }
  }

  const prevImage = () => {
    if (selectedRender && selectedRender.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedRender.images.length) % selectedRender.images.length)
    }
  }

  const nextProject = () => {
    const currentIndex = rendersData.findIndex(r => r.id === selectedRender.id)
    const nextIndex = (currentIndex + 1) % rendersData.length
    setSelectedRender(rendersData[nextIndex])
    setCurrentImageIndex(0)
  }

  const prevProject = () => {
    const currentIndex = rendersData.findIndex(r => r.id === selectedRender.id)
    const prevIndex = (currentIndex - 1 + rendersData.length) % rendersData.length
    setSelectedRender(rendersData[prevIndex])
    setCurrentImageIndex(0)
  }

  return (
    <div ref={containerRef} className={styles.renders3D}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>Renders & Modelado 3D</h3>
        <p className={styles.description}>
          Modelos 3D profesionales y renders fotorrealistas para diversos proyectos
        </p>
      </div>

      <div ref={gridRef} className={styles.rendersGrid}>
        {rendersData.map((render) => (
          <div key={render.id} className={styles.renderCard} onClick={() => openModal(render)}>
            <div className={styles.renderImage}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.renderIcon}></div>
              </div>
            </div>

            <div className={styles.renderOverlay}>
              <div className={styles.renderInfo}>
                <h4 className={styles.renderTitle}>{render.title}</h4>
                <span className={styles.software}>{render.software}</span>
              </div>
              <button className={styles.viewButton}>
                Ver Detalle →
              </button>
            </div>

            <div className={styles.cardGlow}></div>
          </div>
        ))}
      </div>

      {selectedRender && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>✕</button>
            
            {/* Flechas - Navegación entre proyectos */}
            <button 
              className={`${styles.projectNavButton} ${styles.prevProject}`} 
              onClick={(e) => {
                e.stopPropagation()
                prevProject()
              }}
            >
              ‹
            </button>
            <button 
              className={`${styles.projectNavButton} ${styles.nextProject}`} 
              onClick={(e) => {
                e.stopPropagation()
                nextProject()
              }}
            >
              ›
            </button>

            <div className={styles.modalBody}>
              {/* Imagen de fondo */}
              <div 
                className={styles.backgroundImage}
                style={{ backgroundImage: `url(${selectedRender.images[currentImageIndex]})` }}
              >
                {/* Círculos AZULES - Carrusel interno (solo si hay múltiples imágenes) */}
                {selectedRender.images.length > 1 && (
                  <>
                    <button 
                      className={`${styles.seriesNavButton} ${styles.prevSeries}`} 
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                    >
                      ‹
                    </button>
                    <button 
                      className={`${styles.seriesNavButton} ${styles.nextSeries}`} 
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                    >
                      ›
                    </button>
                  </>
                )}

                {/* Indicadores de serie (azules) */}
                {selectedRender.images.length > 1 && (
                  <div className={styles.seriesIndicators}>
                    {selectedRender.images.map((_, index) => (
                      <span 
                        key={index} 
                        className={`${styles.seriesIndicator} ${index === currentImageIndex ? styles.active : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Información en la parte inferior (líneas rojas) */}
              <div className={styles.projectInfo}>
                <div className={styles.infoContent}>
                  <h2 className={styles.projectTitle}>{selectedRender.title}</h2>
                  
                  <div className={styles.metaRow}>
                    <span className={styles.softwareBadge}>Software: {selectedRender.software}</span>
                    <span className={styles.yearBadge}>Año: {selectedRender.year}</span>
                  </div>

                  <p className={styles.projectDescription}>{selectedRender.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Renders3D
