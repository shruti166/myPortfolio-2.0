import React from 'react';
import './About.scss'

export default function About() {
  return (
    <div className='about-zone'>
        <h1 className='title'>About .</h1>
        {/* About section */}
        <div className='about-section'>
        <p>
        <span className="quote">"Hey there! I'm Shruti Joshi, a <span className='animation'></span>.<br/>With expertise in frontened technologies, I bring a unique perspective to every project, seamlessly blending analytical thinking with imaginative flair. 
        In building JavaScript/typscript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar. I'm committed to creating fluent user experiences while staying fashionable."</span>
        </p>
        </div>
       <ul className='header'>
       </ul>
        {/* <h1>Shruti is <span></span></h1> */}
    </div>
  )
}
