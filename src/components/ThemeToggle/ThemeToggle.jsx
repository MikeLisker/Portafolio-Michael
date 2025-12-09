import { useState, useEffect } from 'react'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Cargar tema guardado del localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      const isDarkTheme = savedTheme === 'dark'
      setIsDark(isDarkTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button 
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label="Cambiar tema"
      title={isDark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      <div className={styles.toggleTrack}>
        <div className={`${styles.toggleThumb} ${isDark ? styles.dark : styles.light}`}>
          {isDark ? (
            <span className={styles.icon}>🌙</span>
          ) : (
            <span className={styles.icon}>☀️</span>
          )}
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle
