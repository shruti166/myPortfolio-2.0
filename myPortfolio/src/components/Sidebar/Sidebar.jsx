// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import './sidebar.scss';


export default function Sidebar() {
  return (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={"https://mir-s3-cdn-cf.behance.net/project_modules/1400/7064f8105512449.5f7b1e51a8e7a.jpg"} alt="" width={50}/>
            <p>Shruti</p>
        </Link>
        <nav>
          <NavLink exact='true' activeClassName="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
          </NavLink>
          <NavLink exact='true' activeClassName="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
          </NavLink>
          <NavLink exact='true' activeClassName="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
          </NavLink>
        </nav>
    </div>
  )
}
