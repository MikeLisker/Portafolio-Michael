import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

// Efecto de brillo en hover de botones
document.addEventListener('DOMContentLoaded', () => {
  let mouseX = 0
  let mouseY = 0
  let cursorX = 0
  let cursorY = 0
  let isHovering = false

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // Verificar si está sobre un botón o enlace
    const target = e.target
    isHovering = target.closest('button') || target.closest('a') || target.closest('[role="button"]')
  })

  const animateCursor = () => {
    // Cursor con suavizado
    cursorX += (mouseX - cursorX) * 0.15
    cursorY += (mouseY - cursorY) * 0.15

    document.body.style.setProperty('--cursor-x', `${cursorX}px`)
    document.body.style.setProperty('--cursor-y', `${cursorY}px`)
    document.body.style.setProperty('--cursor-opacity', isHovering ? '1' : '0')

    requestAnimationFrame(animateCursor)
  }

  animateCursor()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
