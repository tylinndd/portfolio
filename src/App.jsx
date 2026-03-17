import React, { useState } from 'react'
import ScanlineOverlay from './components/ScanlineOverlay'
import BootScreen from './components/BootScreen'
import HeroSection from './components/HeroSection'
import About from './components/About'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ResumeSection from './components/ResumeSection'
import SocialsSection from './components/SocialsSection'

function App() {
  const [bootComplete, setBootComplete] = useState(false)

  return (
    <div className="min-h-screen selection:bg-green selection:text-black">
      {!bootComplete && <BootScreen onComplete={() => setBootComplete(true)} />}
      <ScanlineOverlay />
      
      {bootComplete && (
        <>
          <HeroSection />
          <About />
          <ExperienceSection />
          <ProjectsSection />
          <ResumeSection />
          <SocialsSection />
        </>
      )}
    </div>
  )
}

export default App
