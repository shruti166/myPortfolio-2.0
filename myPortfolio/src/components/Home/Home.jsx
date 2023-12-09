import './Home.scss'
// import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-zone" style={{marginTop: 40}}>
      <h1 className='intro'>
        Hi, <br /> I am Shruti
        <br />
        Full Stack Web Developer
        </h1>
      <h2 className='role'>Frontend Developer</h2>
      <div className="contanct-div">
        <a href="/contact" className="contact-btn">
          Connect With Me !
        </a>
      </div>
    </div>
  )
}
