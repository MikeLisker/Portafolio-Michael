import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './Videogames.module.css'
import gamesData from '../../../data/videogames.json'

const Videogames = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(containerRef.current.children,
      { opacity: 1, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out'
      }
    )
  }, [])

  return (
    <div ref={containerRef} className={styles.videogames}>
      {gamesData.map((game) => (
        <div key={game.id} className={styles.gameCard}>
          <div className={styles.videoSection}>
            <div className={styles.videoPlaceholder}>
              <div className={styles.playIcon}>▶</div>
              <p>TRAILER DEL JUEGO</p>
            </div>
            
            {/* Descomentar cuando tengas videos:
            <video controls className={styles.video}>
              <source src={game.trailer} type="video/mp4" />
            </video>
            */}
          </div>

          <div className={styles.gameInfo}>
            <div className={styles.gameMeta}>
              <span className={styles.genre}>{game.genre}</span>
              <span className={styles.year}>{game.year}</span>
            </div>

            <h3 className={styles.gameTitle}>{game.title}</h3>
            
            <p className={styles.gameDescription}>{game.description}</p>

            <a 
              href={game.itchUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.itchButton}
            >
              <span>JUGAR EN ITCH.IO</span>
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Videogames
