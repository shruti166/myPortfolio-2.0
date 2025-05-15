import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import quriousbitImage from '../../assets/images/quriusbitgames.png';
import netflixImage from '../../assets/images/netflix.png';

const Projects = () => {
  const projects = [
    {
      title: 'Qurious Bit Games',
      description: 'A gaming platform built with modern web technologies, featuring interactive gameplay and real-time updates.',
      image: quriousbitImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'WebSocket'],
      github: 'https://github.com/shruti166/quriousbit',
      live: 'https://quriousbit.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS',
      image: '/src/assets/images/portfolio.jpg',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://your-portfolio.com',
    },
    {
      title: 'Netflix Clone',
      description: 'A Netflix clone built with modern web technologies',
      image: netflixImage,
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/shruti166/NetFlix-clone',
      live: 'https://netflix-clone.com',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load image: ${project.image}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={faChrome} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 