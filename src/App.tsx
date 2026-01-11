import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'

export default function App() {
  const [selectedTab, setSelectedTab] = useState('hero')

  return (
    <>
      <Header selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <main>
        {selectedTab === 'hero' && <Hero />}
        {selectedTab === 'projects' && <Projects />}
        {selectedTab === 'about' && <About />}
        {selectedTab === 'contact' && <Contact />}
      </main>
      <Footer />
    </>
  )
}
