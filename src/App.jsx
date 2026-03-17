import React, { useState } from 'react'
import ScanlineOverlay from './components/ScanlineOverlay'
import BootScreen from './components/BootScreen'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Socials from './components/Socials'

function App() {
  const [bootComplete, setBootComplete] = useState(false)

  return (
    <div className="min-h-screen selection:bg-green selection:text-black">
      {!bootComplete && <BootScreen onComplete={() => setBootComplete(true)} />}
      <ScanlineOverlay />
      
      {bootComplete && (
        <>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Resume />
          <Socials />
        </>
      )}
    </div>
  )
}

export default App
