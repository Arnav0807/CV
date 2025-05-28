import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Django', level: 70 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    name: 'Other',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'DevOps', level: 70 },
      { name: 'Testing', level: 80 },
      { name: 'UI/UX Design', level: 75 },
      { name: 'Performance Optimization', level: 85 },
      { name: 'Agile/Scrum', level: 80 },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend')
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ease-in-out ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="heading-lg text-center mb-12 text-dark-900 dark:text-white">
            My <span className="text-primary-500 dark:text-primary-400">Skills</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-md shadow-sm bg-white dark:bg-dark-800 p-1">
                {skillCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeCategory === category.name
                        ? 'bg-primary-500 text-white'
                        : 'text-dark-600 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {skillCategories
                .find((category) => category.name === activeCategory)
                .skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-dark-800 dark:text-dark-200">{skill.name}</h3>
                      <span className="text-sm text-dark-500 dark:text-dark-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-500 dark:bg-primary-400 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}