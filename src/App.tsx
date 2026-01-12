import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './sections/Home'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import About from './sections/About'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

export default function App() {
  const [selectedTab, setSelectedTab] = useState('home')

  return (
    <>
      <Header selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <main>
        {selectedTab === 'home' && <Home />}
        {selectedTab === 'experience' && <Experience />}
        {selectedTab === 'projects' && <Projects />}
        {selectedTab === 'about' && <About />}
        {selectedTab === 'resume' && <Resume />}
        {selectedTab === 'contact' && <Contact />}
      </main>
      <Footer />
    </>
  )
}
