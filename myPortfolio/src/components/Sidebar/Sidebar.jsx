import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faEnvelope,
  faUser,
  faBars,
  faLaptop,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/logo-img.png'
import './sidebar.scss'
import { animateScroll as scroll } from 'react-scroll';
import { useTheme } from '../../contexts/ThemeContext.jsx';

export default function Sidebar() {
  // STATES
  // to handle display of nav
  const [showNav, setShowNav] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();



  const scrollTo = (elementId) => {
    scroll.scrollTo(document.getElementById(elementId).offsetTop, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  return (
    <div className={`nav-bar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo">
        <Link className="logo" to="/" onClick={() => setShowNav(false)}>
          <img className="logo-image" src={logo} alt="Logo" width={60} />
        </Link>
      </div>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          to="/"
          // onClick={() => setShowNav(false)}
          onClick={() => scrollTo('home')}
        >
          <FontAwesomeIcon
            icon={faHome}
            color="#4d4d4e"
            className="icon"
            style={{ marginRight: 10 }}
          />
          Home
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavLink>
        <NavLink
          exact="true"
          className="about-link"
          to="/about"
          onClick={() => scrollTo('about')}
        >
          <FontAwesomeIcon
            icon={faUser}
            color="#4d4d4e"
            className="icon"
            style={{ marginRight: 10 }}
          />
          About
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavLink>
        <NavLink
          exact="true"
          className="about-link"
          to="/work"
          onClick={() => scrollTo('work')}
        >
          <FontAwesomeIcon
            icon={faLaptop}
            color="#4d4d4e"
            className="icon"
            style={{ marginRight: 10 }}
          />
          My Work
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavLink>
        <NavLink
          exact="true"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#4d4d4e"
            className="icon"
            style={{ marginRight: 10 }}
          />
          Contact
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavLink>
        <NavLink
          exact="true"
          target="_blank"
          className="contact-link"
          to="https://github.com/shruti166"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#4a4d4e"
            className="icon"
            style={{ marginRight: 10 }}
          />
          GitHub
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavLink>
        <NavLink
          exact="true"
          target="_blank"
          className="contact-link"
          to="https://www.linkedin.com/in/shruti-joshi-55b67119a/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4a4d4e"
            className="icon"
            style={{ marginRight: 10 }}
          />
          LinkdIn
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavLink>
      </nav>
      <FontAwesomeIcon
        onClick={toggleDarkMode}
        icon={isDarkMode ? faSun : faMoon}
        color={isDarkMode ? 'white' : 'black'}
        size='2x'
        style={{margin:2}}
        className="dark-mode-toggle"
      />
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="black"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}
