import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-white dark:bg-dark-800">
      <div className="container-custom">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-opacity duration-1000 ease-in-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="heading-lg text-center mb-12 text-dark-900 dark:text-white">
            About{" "}
            <span className="text-primary-500 dark:text-primary-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-lg">
                  <img
                    src="assets/Arnav.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white py-2 px-4 rounded-lg shadow-md">
                  <span className="font-bold">5+ Years</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <p className="text-lg text-dark-700 dark:text-dark-200">
                I'm a passionate software engineer with over 10 years of
                experience in creating elegant solutions to complex problems. My
                journey in tech started with a fascination for building things
                that make a difference.
              </p>
              <p className="text-lg text-dark-700 dark:text-dark-200">
                I specialize in frontend development with React and modern
                JavaScript, but I'm also comfortable working across the full
                stack. I enjoy creating intuitive interfaces and optimizing
                performance to deliver exceptional user experiences.
              </p>
              <p className="text-lg text-dark-700 dark:text-dark-200">
                When I'm not coding, you can find me hiking in the mountains,
                reading science fiction, or experimenting with new technologies
                and frameworks to keep my skills sharp.
              </p>

              <div className="pt-4">
                <a
                  href="Arnav-cv.pdf"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                >
                  Download Resume
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
