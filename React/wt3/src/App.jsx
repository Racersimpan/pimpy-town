import { useEffect } from 'react'
import { NavLink, Route, Routes, Link, useLocation } from 'react-router-dom'
import './styles/App.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Menu from './pages/Menu'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function App() {
  return (
    <main>
      <ScrollToTop />
      <header className="hero" />

      <nav className="top-nav" aria-label="Huvudmeny">
        <Link className="logo-button" to="/">
          <img
            className="logo"
            src="/images/Fatimasushilogo.png"
            alt="Fatima Sushi Bar"
          />
        </Link>
        <div className="nav-buttons">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Hem
          </NavLink>
          <NavLink to="/kontakt" className={({ isActive }) => (isActive ? 'active' : '')}>
            Kontakt
          </NavLink>
          <NavLink
            to="/meny"
            className={({ isActive }) =>
              `nav-button-highlight ${isActive ? 'active' : ''}`
            }
          >
            Meny
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meny" element={<Menu />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App
