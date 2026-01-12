import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './sections/Home'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'

export default function App() {
  const [selectedTab, setSelectedTab] = useState('home')

  return (
    <>
      <Header selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <main>
        {selectedTab === 'home' && <Home />}
        {selectedTab === 'projects' && <Projects />}
        {selectedTab === 'about' && <About />}
        {selectedTab === 'contact' && <Contact />}
      </main>
      <Footer />
    </>
  )
}
