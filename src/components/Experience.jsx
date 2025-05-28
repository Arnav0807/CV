import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "Alpinesoft IT Solutions.",
    duration: "Jan 2022 - Present",
    description:
      "Leading the frontend development team in building scalable web applications. Implemented modern React architecture that improved performance by 40%. Mentored junior developers and established best practices.",
    highlights: [
      "Reduced bundle size by 60% through code splitting and lazy loading",
      "Improved CI/CD pipeline reducing deployment time by 70%",
      "Led the migration from CSS to Tailwind, improving design consistency",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Alpinesoft IT Solutions",
    duration: "Mar 2021 - Dec 2022",
    description:
      "Developed responsive web applications using React and Redux. Collaborated with designers to implement pixel-perfect interfaces and improve user experience.",
    highlights: [
      "Built reusable component library used across multiple projects",
      "Implemented automated testing that caught 95% of regression issues",
      "Optimized rendering performance for data-heavy dashboards",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Alpinesoft IT Solutions",
    duration: "Jun 2020 - Feb 2021",
    description:
      "Started as an intern and quickly advanced to a full-time role. Worked on various projects using JavaScript, HTML, and CSS. Learned agile development methodologies.",
    highlights: [
      "Developed and maintained client websites",
      "Implemented responsive designs for mobile compatibility",
      "Created interactive data visualizations using D3.js",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section bg-white dark:bg-dark-800">
      <div className="container-custom">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ease-in-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="heading-lg text-center mb-12 text-dark-900 dark:text-white">
            Work{" "}
            <span className="text-primary-500 dark:text-primary-400">
              Experience
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-dark-200 dark:bg-dark-700"></div>

              {/* Experience items */}
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`mb-12 md:mb-0 ${
                    index % 2 === 0
                      ? "md:ml-auto md:pl-16 md:pr-0"
                      : "md:mr-auto md:pr-16 md:pl-0"
                  } relative md:w-1/2 p-6`}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Timeline circle */}
                  <div
                    className="hidden md:block absolute top-6 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-dark-800 shadow-md z-10"
                    style={{
                      [index % 2 === 0 ? "left" : "right"]: "-16px",
                      transform: "translateX(-50%)",
                    }}
                  ></div>

                  <div className="card hover:scale-105">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="heading-sm text-dark-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full">
                        {index === 0 ? "Current" : ""}
                      </span>
                    </div>

                    <div className="flex items-center text-dark-500 dark:text-dark-400 mb-3">
                      <FiBriefcase className="mr-2" />
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <FiCalendar className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>

                    <p className="mb-4 text-dark-600 dark:text-dark-300">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-primary-500 dark:text-primary-400 mr-2">
                            •
                          </span>
                          <p className="text-sm text-dark-600 dark:text-dark-300">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
