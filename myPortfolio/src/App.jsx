import { useState, useEffect } from 'react';
import './App.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Loader from './components/Loader/Loader'; // Import your Loader component
import './index.css';
import Contact from './components/Contact/Contact';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Simulating an asynchronous operation
      setTimeout(() => {
        // Setting loading to false when the operation is complete
        setLoading(false);
      }, 1000); // Simulating a 1-second delay
    };
    fetchData();
  }, []); 

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="App">
          <Parallax
            pages={1.2}
            style={{ top: '0', left: '0', padding: 0 }}
            className="animation"
          >
            <ParallaxLayer offset={0} speed={0.25}>
              <div className="animation_layer parallax" id="artback"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
              <div className="animation_layer parallax" id="mountain"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.4}>
              <div className="animation_layer parallax" id="logoland"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
              <div className="animation_layer parallax" id="jungle1"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}>
              <div className="animation_layer parallax" id="jungle2"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
              <div className="animation_layer parallax" id="jungle3"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.45}>
              <div className="animation_layer parallax" id="jungle4"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.4}>
              <div className="animation_layer parallax" id="manonmountain"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}>
              <div className="animation_layer parallax" id="jungle5"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.25}></ParallaxLayer>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Layout />
                  </>
                }
              >
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="work" element={<Work />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>

          </Parallax> 
     
    
        </div>
      )}
    </>
  );
}

export default App;
