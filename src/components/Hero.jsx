import { useRef, useEffect } from "react";
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Hero() {
  const highlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!highlightRef.current) return;

      const { clientX, clientY } = e;
      const rect = highlightRef.current.getBoundingClientRect();

      highlightRef.current.style.setProperty(
        "--mouse-x",
        `${clientX - rect.left}px`
      );
      highlightRef.current.style.setProperty(
        "--mouse-y",
        `${clientY - rect.top}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      <div
        ref={highlightRef}
        className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-400/20 dark:from-primary-700/20 dark:to-accent-600/20 opacity-0 sm:opacity-50"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(59, 130, 246, 0.15), transparent 40%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6 text-dark-900 dark:text-white">
            <span className="block">Hi, I'm Arnav Arvind</span>
            <span className="block text-primary-500 dark:text-primary-400">
              Software Engineer
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-dark-600 dark:text-dark-300">
            I build exceptional digital experiences with a focus on performance
            and user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Get in touch
              <FiArrowRight className="ml-2" />
            </a>
            <a href="#projects" className="btn-secondary">
              View my work
            </a>
          </div>

          <div className="flex justify-center mt-12 space-x-6">
            <a
              href="#"
              className="text-dark-500 hover:text-primary-500 dark:text-dark-400 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="#"
              className="text-dark-500 hover:text-primary-500 dark:text-dark-400 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="#"
              className="text-dark-500 hover:text-primary-500 dark:text-dark-400 dark:hover:text-primary-400 transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a
          href="#about"
          className="flex flex-col items-center text-dark-500 dark:text-dark-400"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
