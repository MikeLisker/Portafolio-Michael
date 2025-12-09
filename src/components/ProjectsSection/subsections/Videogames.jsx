import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './Videogames.module.css'
import gamesData from '../../../data/videogames.json'

// Función para extraer ID de YouTube
const getYouTubeEmbedUrl = (url) => {
  if (!url) return null
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null
}

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
            {game.trailer ? (
              getYouTubeEmbedUrl(game.trailer) ? (
                <iframe
                  src={getYouTubeEmbedUrl(game.trailer)}
                  title={game.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.video}
                ></iframe>
              ) : (
                <video controls className={styles.video}>
                  <source src={game.trailer} type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
              )
            ) : (
              <div className={styles.videoPlaceholder}>
                <div className={styles.playIcon}>▶</div>
                <p>TRAILER DEL JUEGO</p>
              </div>
            )}
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
