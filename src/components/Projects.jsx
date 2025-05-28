import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, cart management, and secure checkout.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Frontend', 'Backend'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity tool for managing tasks and projects. Includes features like drag-and-drop, task prioritization, and team collaboration.',
    image: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['TypeScript', 'React', 'Redux', 'Frontend'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'A data visualization dashboard with real-time updates. Features interactive charts, customizable widgets, and API integration.',
    image: 'https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'D3.js', 'GraphQL', 'Frontend'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Content Management System',
    description: 'A headless CMS built with Node.js and Express. Provides a flexible API for managing content across multiple platforms.',
    image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Node.js', 'Express', 'MongoDB', 'Backend'],
    liveLink: '#',
    githubLink: '#',
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const tags = ['All', 'Frontend', 'Backend', 'React', 'Node.js']
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ease-in-out ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="heading-lg text-center mb-12 text-dark-900 dark:text-white">
            My <span className="text-primary-500 dark:text-primary-400">Projects</span>
          </h2>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === tag 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="card overflow-hidden h-full flex flex-col group-hover:shadow-medium">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-2 py-1 bg-dark-800/80 text-white text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2 py-1 bg-dark-800/80 text-white text-xs rounded-full">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="heading-sm mb-3 text-dark-900 dark:text-white">{project.title}</h3>
                    <p className="text-dark-600 dark:text-dark-300 mb-4">{project.description}</p>
                    
                    <div className="flex items-center space-x-4 mt-auto">
                      <a 
                        href={project.liveLink} 
                        className="flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="flex items-center text-dark-600 hover:text-dark-800 dark:text-dark-300 dark:hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub className="mr-1" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}