import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import MainLayout from './components/Layout/MainLayout'
import AboutSection from './components/AboutSection/AboutSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import TechSection from './components/TechSection/TechSection'
import ContactSection from './components/ContactSection/ContactSection'
import './App.css'

function App() {
  const [hasEntered, setHasEntered] = useState(false)

  const handleEnter = () => {
    console.log('Entrando al portafolio principal...')
    setHasEntered(true)
  }

  useEffect(() => {
    console.log('App montado. hasEntered:', hasEntered)
  }, [hasEntered])

  return (
    <Router>
      {!hasEntered ? (
        <WelcomeScreen onEnter={handleEnter} />
      ) : (
        <MainLayout>
          <AboutSection />
          <ProjectsSection />
          <TechSection />
          <ContactSection />
        </MainLayout>
      )}
    </Router>
  )
}

export default App
