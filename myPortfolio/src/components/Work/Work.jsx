import { useEffect, useState } from 'react';
import './Work.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import netflix from '../../assets/images/netflix.png';
import ajio from '../../assets/images/ajo.png';
import envoy from '../../assets/images/envoy.png';
import indeed from '../../assets/images/indeed.png'

const projects = [
  {
    title: 'Netflix Revamp',
    description: 'Another take on Netflix design',
    githubIcon: faGithub,
    laptopIcon: faLaptopCode,
    image: netflix,
    githubLink: 'https://github.com/shruti166/NetFlix-clone',
    liveDemoLink: 'https://main--comfy-concha-3999ce.netlify.app/',
  },
  {
    title: 'Ajio - Full Stack',
    description: 'A full stack application created using MERN stack',
    githubIcon: faGithub,
    laptopIcon: faLaptopCode,
    image: ajio,
    githubLink: 'https://github.com/shruti166/Ajio_FullStack',
    liveDemoLink: 'https://rococo-longma-02edbd.netlify.app/',
  },
  {
    title: 'Envoy - A clone',
    description: 'A clone made using basics of HTML, Javascript',
    githubIcon: faGithub,
    laptopIcon: faLaptopCode,
    image: envoy,
    githubLink: 'https://github.com/shruti166/envoy-clone-project',
    liveDemoLink: 'https://envoy-clone-project.netlify.app/',
  },
  {
    title: 'Indeed',
    description: 'A clone made using basics of HTML, Javascript',
    githubIcon: faGithub,
    laptopIcon: faLaptopCode,
    image: indeed,
    githubLink: 'https://github.com/shruti166/Indeed_Clone',
    liveDemoLink: 'https://transcendent-melba-1c289a.netlify.app/',
  },
];

export default function Work() {
  const [currentProject, setCurrentProject] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  useEffect(() => {
    setSlideDirection(''); // Reset slide direction after animation
  }, [currentProject]);



  const handleNextClick = () => {
    setSlideDirection('next');
    // Update currentProject index to show details of the next project
    setCurrentProject((prevIndex) => (prevIndex + 1) % projects.length);
   
  };

  const handlePrevClick = () => {
    setSlideDirection('prev');
    setCurrentProject((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToGithub = () => {
    window.open(project.githubLink, '_blank'); // Open link in a new tab
  };

  const goToLiveDemo = () => {
    window.open(project.liveDemoLink, '_blank'); // Open link in a new tab
  };

  const project = projects[currentProject];
  useEffect(() => {
    console.log(currentProject)
  }, [currentProject])
  return (
    <div className={`body-container ${slideDirection}`} >
      <div className="image-container">
        <img src={project.image} alt="" width={400} />
        <div className="caption">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="icons">
            <FontAwesomeIcon
              icon={project.githubIcon}
              color="#fff"
              className="icon"
              size='3x'
              style={{ marginRight: 10 }}
              onClick={goToGithub}
            />
            <FontAwesomeIcon
              icon={project.laptopIcon}
              color="#fff"
              size='3x'
              className="icon"
              style={{ marginRight: 10 }}
              onClick={goToLiveDemo}
            />
          </div>
        </div>
      </div>
      <div className='button-container'>
      <button onClick={handlePrevClick}><FontAwesomeIcon style={{ marginRight: 10 }} icon={faArrowAltCircleLeft}/>Go to Previous </button>
      <button onClick={handleNextClick}> <FontAwesomeIcon style={{ marginRight: 10 }} icon={faArrowAltCircleRight}/>Next</button>
      </div>
     
    </div>
  );
}
