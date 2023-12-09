import './About.scss'

export default function About() {
  return (
    <div className="about-zone">
      <h1 className="title">About .</h1>
      {/* About section */}
      <div className="about-section">
        <p>
          <span className="quote">
            Hey there! I am Shruti Joshi, a Full Stack web Developer based in
            Bangalore.
            <br />
            With expertise in frontened technologies, I bring a unique
            perspective to every project, seamlessly blending analytical
            thinking with imaginative flair.
          </span>
        </p>

        <p className="title">EXPERIENCE</p>
        <p>
          Currently employed as an Associate Software Engineer at Darby
          Telematics India Pvt Ltd, I play a key role in the development of
          cutting-edge solutions using React, TypeScript, and AngularJS. My role
          involves applying best practices in software development, ensuring
          code quality, scalability, and performance. Leveraging technologies
          like React, TypeScript, and AngularJS, I contribute to ongoing
          projects that align with the companys objectives.
        </p>
      </div>
      <ul className="header"></ul>
      {/* <h1>Shruti is <span></span></h1> */}
    </div>
  )
}
