import { useState } from 'react'
import './App.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {
  const [activeView, setActiveView] = useState('home')

  const changeView = (view) => {
    setActiveView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      <header className="hero" />

      <nav className="top-nav" aria-label="Huvudmeny">
        <button className="logo-button" onClick={() => changeView('home')}>
          <img
            className="logo"
            src="/images/Fatimasushilogo.png"
            alt="Fatima Sushi Bar"
          />
        </button>
        <div className="nav-buttons">
          <button className={activeView === 'home' ? 'active' : ''} onClick={() => changeView('home')}>
            Hem
          </button>
          <button className={activeView === 'contact' ? 'active' : ''} onClick={() => changeView('contact')}>
            Kontakt
          </button>
          <button
            className={`nav-button-highlight ${activeView === 'menu' ? 'active' : ''}`}
            onClick={() => changeView('menu')}
          >
            Meny
          </button>
        </div>
      </nav>

      {activeView === 'home' && <Home />}
      {activeView === 'menu' && <Menu />}
      {activeView === 'contact' && <Contact />}
    </main>
  )
}

export default App
