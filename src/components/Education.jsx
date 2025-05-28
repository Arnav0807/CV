import { useInView } from "react-intersection-observer";
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";

const education = [
  {
    degree: "Master's in Computer Science",
    institution: "Manipal University Jaipur",
    location: "Jaupur, Rajasthan",
    period: "2019 - 2021",
    description:
      "Specialized in Computer Interaction and Web Technologies. Thesis on optimizing React application performance in large-scale applications.",
    achievements: [
      "Graduated with 8.5 CGPA",
      "Published 1 research papers on web performance optimization",
      "Teaching assistant for Web Development course",
    ],
  },
  {
    degree: "Bachelor's in Computer Applications",
    institution: "Jamia Hamdard University",
    location: "New Delhi, Delhi",
    period: "2016 - 2019",
    description:
      "Core curriculum included data structures, algorithms, software architecture, and web development fundamentals.",
    achievements: [
      "Graduatd with 7.5 CGPA",
      "Led the university's web development club",
      "Internship at Microsoft during senior year",
    ],
  },
];

const certifications = [
  {
    name: "Diploma- Certified Ethical Hacking",
    issuer: "DISCR2018350",
    date: "2019",
    expiry: "N/A",
  },
  {
    name: "Diploma- EC Council Security Analyst (ECSA)",
    issuer: "DISCR2018351",
    date: "2019",
    expiry: "N/A",
  },
  {
    name: "Diploma- Web Penetration (OWASP TOP 10)",
    issuer: "DISCR2018352",
    date: "2019",
    expiry: "N/A",
  },
  {
    name: "Diploma- Mobile Penetration (OMASP)",
    issuer: "DISCR2018353",
    date: "2019",
    expiry: "N/A",
  },
];

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="section bg-white dark:bg-dark-800">
      <div className="container-custom">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ease-in-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="heading-lg text-center mb-12 text-dark-900 dark:text-white">
            Education &{" "}
            <span className="text-primary-500 dark:text-primary-400">
              Certifications
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Education */}
            <div className="mb-16">
              <h3 className="heading-md mb-8 text-center text-dark-800 dark:text-dark-100">
                Academic Background
              </h3>

              <div className="space-y-12">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="card hover:scale-105"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                      transitionDelay: `${index * 200}ms`,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="heading-sm text-dark-900 dark:text-white">
                          {item.degree}
                        </h4>
                        <div className="flex items-center text-dark-500 dark:text-dark-400 mt-1">
                          <FiBookOpen className="mr-2" />
                          <span>{item.institution}</span>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 flex md:flex-col md:items-end">
                        <div className="flex items-center text-dark-500 dark:text-dark-400 mr-4 md:mr-0 md:mb-1">
                          <FiCalendar className="mr-2" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center text-dark-500 dark:text-dark-400">
                          <FiMapPin className="mr-2" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 text-dark-600 dark:text-dark-300">
                      {item.description}
                    </p>

                    <div>
                      <h5 className="font-medium text-dark-800 dark:text-dark-200 mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-500 dark:text-primary-400 mr-2">
                              •
                            </span>
                            <span className="text-dark-600 dark:text-dark-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="heading-md mb-8 text-center text-dark-800 dark:text-dark-100">
                Professional Certifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="card text-center hover:scale-105"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                      transitionDelay: `${(index + education.length) * 200}ms`,
                    }}
                  >
                    <div className="mb-4 h-16 flex items-center justify-center">
                      <span className="text-5xl text-primary-500 dark:text-primary-400">
                        {index === 0 ? "🏆" : index === 1 ? "🎓" : "📜"}
                      </span>
                    </div>
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-dark-600 dark:text-dark-300">
                      {cert.issuer}
                    </p>
                    <div className="mt-3 pt-3 border-t border-dark-200 dark:border-dark-700 text-sm">
                      <p className="text-dark-500 dark:text-dark-400">
                        Issued: {cert.date}{" "}
                        {cert.expiry !== "N/A" && `• Expires: ${cert.expiry}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
