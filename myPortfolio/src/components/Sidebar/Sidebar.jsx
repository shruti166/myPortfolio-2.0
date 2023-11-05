// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/logo.png';
import './sidebar.scss'

export default function Sidebar() {
  // STATES
  // to handle display of nav
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img
          src={logo}
          alt="Logo"
        />
        <p>SHRUTI</p>
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/shruti-joshi-55b67119a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4a4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/shruti166"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4a4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}
