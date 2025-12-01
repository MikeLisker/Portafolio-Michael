import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import styles from './Illustrations.module.css'
import illustrationsData from '../../../data/illustrations.json'

const Illustrations = () => {
  const containerRef = useRef(null)
  const masonryRef = useRef(null)
  const [selectedIllustration, setSelectedIllustration] = useState(null)
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

    gsap.fromTo(masonryRef.current.children,
      { opacity: 1, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: masonryRef.current,
          start: 'top 80%'
        }
      }
    )
  }, [])

  useEffect(() => {
    if (selectedIllustration) {
      document.body.style.overflow = 'hidden'
      setCurrentImageIndex(0)
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedIllustration])

  const openModal = (illustration) => {
    setSelectedIllustration(illustration)
  }

  const closeModal = () => {
    setSelectedIllustration(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedIllustration && selectedIllustration.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedIllustration.images.length)
    }
  }

  const prevImage = () => {
    if (selectedIllustration && selectedIllustration.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedIllustration.images.length) % selectedIllustration.images.length)
    }
  }

  const nextProject = () => {
    const currentIndex = illustrationsData.findIndex(i => i.id === selectedIllustration.id)
    const nextIndex = (currentIndex + 1) % illustrationsData.length
    setSelectedIllustration(illustrationsData[nextIndex])
    setCurrentImageIndex(0)
  }

  const prevProject = () => {
    const currentIndex = illustrationsData.findIndex(i => i.id === selectedIllustration.id)
    const prevIndex = (currentIndex - 1 + illustrationsData.length) % illustrationsData.length
    setSelectedIllustration(illustrationsData[prevIndex])
    setCurrentImageIndex(0)
  }

  return (
    <div ref={containerRef} className={styles.illustrations}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>Ilustraciones Digitales & Analógicas</h3>
        <p className={styles.description}>
          Trabajos creativos que combinan técnicas tradicionales y digitales
        </p>
      </div>

      <div ref={masonryRef} className={styles.masonryGrid}>
        {illustrationsData.map((illustration) => (
          <div 
            key={illustration.id} 
            className={`${styles.illustrationCard} ${illustration.tall ? styles.tall : ''}`}
            onClick={() => openModal(illustration)}
          >
            <div className={styles.illustrationImage}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.illustrationIcon}></div>
              </div>
            </div>

            <div className={styles.illustrationOverlay}>
              <div className={styles.illustrationInfo}>
                <h4 className={styles.illustrationTitle}>{illustration.title}</h4>
                <span className={`${styles.typeBadge} ${
                  illustration.type === 'Digital' ? styles.digital : styles.analog
                }`}>
                  {illustration.type}
                </span>
              </div>
            </div>

            <div className={styles.hoverEffect}></div>
          </div>
        ))}
      </div>

      {selectedIllustration && (
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
                style={{ backgroundImage: `url(${selectedIllustration.images[currentImageIndex]})` }}
              >
                {/* Círculos AZULES - Carrusel interno (solo si hay múltiples imágenes) */}
                {selectedIllustration.images.length > 1 && (
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
                {selectedIllustration.images.length > 1 && (
                  <div className={styles.seriesIndicators}>
                    {selectedIllustration.images.map((_, index) => (
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
                  <h2 className={styles.projectTitle}>{selectedIllustration.title}</h2>
                  
                  <div className={styles.metaRow}>
                    <span className={`${styles.typeBadge} ${
                      selectedIllustration.type === 'Digital' ? styles.digital : styles.analog
                    }`}>
                      {selectedIllustration.type}
                    </span>
                    <span className={styles.yearBadge}>Año: {selectedIllustration.year}</span>
                  </div>

                  <p className={styles.projectDescription}>{selectedIllustration.description}</p>

                  <div className={styles.toolsRow}>
                    {selectedIllustration.tools.map((tool, index) => (
                      <span key={index} className={styles.toolTag}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Illustrations
