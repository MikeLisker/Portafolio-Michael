import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './InteractivePage.module.css'
import projectData from '../../../data/interactivePage.json'

const InteractivePage = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)

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

    gsap.fromTo(videoRef.current,
      { opacity: 1, scale: 0.95 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      }
    )

    gsap.fromTo(contentRef.current.children,
      { opacity: 1, x: -30 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
      }
    )
  }, [])

  return (
    <div ref={containerRef} className={styles.interactivePage}>
      <div className={styles.videoContainer} ref={videoRef}>
        {/* Reemplaza con tu video/reel real */}
        <div className={styles.videoPlaceholder}>
          <div className={styles.playIcon}>▶</div>
          <p>VIDEO REEL DEL PROYECTO</p>
        </div>
        
        {/* Descomentar cuando tengas el video:
        <video controls className={styles.video}>
          <source src={projectData.videoReel} type="video/mp4" />
        </video>
        */}
      </div>

      <div ref={contentRef} className={styles.content}>
        <h3 className={styles.projectTitle}>{projectData.title}</h3>
        
        <p className={styles.description}>
          {projectData.description}
        </p>

        <div className={styles.techStack}>
          {projectData.techStack.map((tech, index) => (
            <span key={index} className={styles.techBadge}>{tech}</span>
          ))}
        </div>

        <a 
          href={projectData.liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          <span>VER PROYECTO EN VIVO</span>
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </div>
  )
}

export default InteractivePage
