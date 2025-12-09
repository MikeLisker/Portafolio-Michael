import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './VideosAnimations.module.css'
import videosData from '../../../data/videosAnimations.json'

gsap.registerPlugin(ScrollTrigger)

const VideosAnimations = () => {
  const containerRef = useRef(null)
  const carouselRef = useRef(null)
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 1, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }
    )
  }, [])

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedVideo])

  const openModal = (video) => {
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  const nextVideo = () => {
    const currentIndex = videosData.findIndex(v => v.id === selectedVideo.id)
    const nextIndex = (currentIndex + 1) % videosData.length
    setSelectedVideo(videosData[nextIndex])
  }

  const prevVideo = () => {
    const currentIndex = videosData.findIndex(v => v.id === selectedVideo.id)
    const prevIndex = (currentIndex - 1 + videosData.length) % videosData.length
    setSelectedVideo(videosData[prevIndex])
  }

  const getYouTubeEmbedUrl = (youtubeId) => {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1`
  }

  return (
    <div ref={containerRef} className={styles.videosAnimations}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>Videos & Animaciones</h3>
        <p className={styles.instruction}>Explora mis trabajos audiovisuales</p>
      </div>

      <div ref={carouselRef} className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {videosData.map((video) => (
            <div key={video.id} className={styles.videoCard} onClick={() => openModal(video)}>
              <div className={styles.thumbnail}>
                {video.videoFile ? (
                  <video 
                    className={styles.thumbnailVideo}
                    src={video.videoFile}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause()
                      e.target.currentTime = 0
                    }}
                  />
                ) : (
                  <div className={styles.thumbnailPlaceholder}>
                    <div className={styles.playButton}>▶</div>
                  </div>
                )}
                <div className={styles.duration}>{video.duration}</div>
              </div>

              <div className={styles.videoInfo}>
                <h4 className={styles.videoTitle}>{video.title}</h4>
                <p className={styles.synopsis}>{video.synopsis}</p>
                
                <button className={styles.watchButton}>
                  <span>VER VIDEO</span>
                  <span className={styles.arrow}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>✕</button>
            
            <button 
              className={`${styles.projectNavButton} ${styles.prevProject}`}
              onClick={(e) => {
                e.stopPropagation()
                prevVideo()
              }}
              aria-label="Video anterior"
            >
              ‹
            </button>
            
            <button 
              className={`${styles.projectNavButton} ${styles.nextProject}`}
              onClick={(e) => {
                e.stopPropagation()
                nextVideo()
              }}
              aria-label="Siguiente video"
            >
              ›
            </button>
            
            <div className={styles.modalBody}>
              <div className={styles.videoPlayer}>
                {selectedVideo.youtubeId ? (
                  <iframe
                    src={getYouTubeEmbedUrl(selectedVideo.youtubeId)}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : selectedVideo.videoFile ? (
                  <video 
                    key={selectedVideo.id}
                    controls 
                    className={styles.localVideo}
                  >
                    <source src={selectedVideo.videoFile} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                ) : (
                  <div className={styles.noVideoMessage}>
                    <p>Video no disponible</p>
                    <p className={styles.noVideoSubtext}>El video será agregado próximamente</p>
                  </div>
                )}
              </div>

              <div className={styles.modalDetails}>
                <h2 className={styles.modalTitle}>{selectedVideo.title}</h2>
                
                <div className={styles.metaInfo}>
                  <span className={styles.metaItem}>
                    <strong>Duración:</strong> {selectedVideo.duration}
                  </span>
                  <span className={styles.metaItem}>
                    <strong>Año:</strong> {selectedVideo.year}
                  </span>
                </div>

                <p className={styles.modalDescription}>{selectedVideo.description}</p>

                <div className={styles.toolsUsed}>
                  <h4 className={styles.toolsTitle}>Herramientas utilizadas:</h4>
                  <div className={styles.toolsList}>
                    {selectedVideo.tools.map((tool, index) => (
                      <span key={index} className={styles.toolBadge}>{tool}</span>
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

export default VideosAnimations
