import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import LearningPath from './components/LearningPath'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    if (typeof window.__introReactReady === 'function') window.__introReactReady()

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.07 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '58px' }}>
        <div id="hero"><Hero /></div>
        <About />
        <Skills />
        <Projects />
        <LearningPath />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App