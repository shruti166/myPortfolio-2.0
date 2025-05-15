import { motion } from 'framer-motion'
import './About.scss'

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Java'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'Jest', 'Webpack', 'CI/CD', 'Postman'],
    },
    {
      category: 'Other Skills',
      items: [
        'Data Structures and Algorithms',
        'Microservices',
        'Restful APIs',
        'System Design',
      ],
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                With 2 years of experience in full-stack development, I&apos;ve
                had the privilege of working on diverse projects that have
                sharpened my technical expertise and problem-solving abilities.
              </p>
              <p className="text-lg text-gray-300">
                I specialize in building scalable web applications using modern
                technologies and best practices. My approach combines technical
                excellence with a strong focus on user experience and business
                value.
              </p>
              <p className="text-lg text-gray-300">
                When I&apos;m not coding, I enjoy staying up-to-date with the
                latest tech trends and contributing to the developer community
                through mentorship and open-source projects.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
                Technical Expertise
              </h3>
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="mb-6">
                  <h4 className="text-xl font-medium text-blue-400 mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
