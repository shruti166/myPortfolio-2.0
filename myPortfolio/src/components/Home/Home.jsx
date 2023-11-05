import './Home.scss';
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="text-zone">
      <h1>Hi, <br/> I am
      Shruti
      <br/>
      Full Stack Web Developer
      </h1>
      <h2>Frontend Developer</h2>
      <Link to ="/contact">Click here to contact me</Link>
    </div>
  )
}
