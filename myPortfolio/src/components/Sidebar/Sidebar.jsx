// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faBars, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/logo-img.png';
import './sidebar.scss'

export default function Sidebar() {
  // STATES
  // to handle display of nav
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <div className='logo'>
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img
          className='logo-image'
          src={logo}
          alt="Logo"
          width={60}
        />
      </Link>
      </div>
     
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" className='icon'style={{marginRight: 10}}/>
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
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" className='icon' style={{marginRight: 10}}/>
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
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faLaptop} color="#4d4d4e" className='icon' style={{marginRight: 10}}/>
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
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" className='icon' style={{marginRight: 10}}/>
          Contact
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
          <FontAwesomeIcon icon={faGithub} color="#4a4d4e" className='icon' style={{marginRight: 10}}/>
          GitHub
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
          <FontAwesomeIcon icon={faLinkedin} color="#4a4d4e" className='icon' style={{marginRight: 10}}/>
          LinkdIn
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavLink>
      </nav>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}
