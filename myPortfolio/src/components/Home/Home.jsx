import './Home.scss'
// import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-zone">
      <h1>
        Hi, <br /> I am Shruti
        <br />
        Full Stack Web Developer
      </h1>
      <h2>Frontend Developer</h2>
      <div className="contanct-div">
        <a href="/contact" className="contact-btn">
          Connect With Me !
        </a>
      </div>
    </div>
  )
}
