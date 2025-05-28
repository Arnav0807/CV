import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiHeart,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
              Arnav Arvind
            </h3>
            <p className="text-dark-600 dark:text-dark-300 mb-4 max-w-md">
              A software engineer specializing in building exceptional digital
              experiences. Based in San Francisco, CA. Available for freelance
              and full-time positions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-dark-500 hover:text-primary-500 dark:text-dark-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="#"
                className="text-dark-500 hover:text-primary-500 dark:text-dark-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-dark-500 hover:text-primary-500 dark:text-dark-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-dark-500 hover:text-primary-500 dark:text-dark-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-dark-600 hover:text-primary-500 dark:text-dark-300 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-dark-600 hover:text-primary-500 dark:text-dark-300 dark:hover:text-primary-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-dark-600 hover:text-primary-500 dark:text-dark-300 dark:hover:text-primary-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-dark-600 hover:text-primary-500 dark:text-dark-300 dark:hover:text-primary-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-dark-600 hover:text-primary-500 dark:text-dark-300 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-dark-600 dark:text-dark-300">
                <span className="font-medium">Email:</span> arnav@arnavarvind.in
              </li>
              <li className="text-dark-600 dark:text-dark-300">
                <span className="font-medium">Phone:</span> 9910550022
              </li>
              <li className="text-dark-600 dark:text-dark-300">
                <span className="font-medium">Location:</span> New Delhi, Vasant
                Kunj
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-200 dark:border-dark-700 text-center">
          <p className="text-dark-600 dark:text-dark-400 flex items-center justify-center">
            &copy; {currentYear} Arnav Arvind. All rights reserved. Made with
            <FiHeart className="mx-1 text-red-500" /> in New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
