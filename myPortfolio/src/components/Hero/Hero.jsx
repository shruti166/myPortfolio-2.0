// import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resumePDF from '../../assets/shruti_joshi_resume.pdf';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-400">Shruti Joshi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            Full Stack Developer | 2 Years Experience
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            I craft elegant solutions to complex problems, specializing in modern web applications
            and scalable architectures.
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href={resumePDF}
              download="Shruti_Joshi_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors"
            >
              View Work
            </motion.a>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <motion.a
              href="https://github.com/shruti166"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-3xl text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shruti-joshi-55b67119a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-3xl text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 