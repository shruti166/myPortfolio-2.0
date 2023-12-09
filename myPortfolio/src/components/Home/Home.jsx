import './Home.scss';
import Resume from '../../Shruti_Joshi_V2.pdf'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../contexts/ThemeContext.jsx';

export default function Home() {
  const downloadResume = () => {
    window.open(Resume, '_blank');
  };
  const { isDarkMode } = useTheme();
  return (
    <>
    <div className={`text-zone ${isDarkMode ? 'dark-mode' : ''}`} style={{marginTop: 40}}>
      <h1 className='intro'>
        Hi, <br /> I am Shruti
        <br />
        Full Stack Web Developer
        </h1>
      <h2 className='role'>Frontend Developer</h2>
      <div className="contact-btn" onClick={downloadResume}>
        <FontAwesomeIcon  style={{marginRight: 10}} icon={faDownload}/>Download Resume
      </div>
    </div>

      
    </>
  )
}
