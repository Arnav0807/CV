import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    setFormStatus("submitting");

    setTimeout(() => {
      setFormStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ease-in-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="heading-lg text-center mb-12 text-dark-900 dark:text-white">
            Get In{" "}
            <span className="text-primary-500 dark:text-primary-400">
              Touch
            </span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="heading-md mb-4 text-dark-800 dark:text-dark-100">
                    Contact Information
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300">
                    Feel free to reach out if you're looking for a developer,
                    have a question, or just want to connect.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                      <FiMail size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400">
                        Email
                      </h4>
                      <a
                        href="mailto:arnav@arnavarvind.in"
                        className="text-dark-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        arnav@arnavarvind.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                      <FiPhone size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400">
                        Phone
                      </h4>
                      <a
                        href="tel:+1234567890"
                        className="text-dark-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        +91 9910550022
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                      <FiMapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400">
                        Location
                      </h4>
                      <p className="text-dark-800 dark:text-white">
                        New Delhi, Vasant Kunj
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="card">
                    <h4 className="font-medium text-dark-800 dark:text-white mb-3">
                      Working Hours
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-dark-600 dark:text-dark-300">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between text-dark-600 dark:text-dark-300">
                        <span>Saturday:</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between text-dark-600 dark:text-dark-300">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3">
                <div className="card">
                  <h3 className="heading-md mb-6 text-dark-800 dark:text-dark-100">
                    Send Me a Message
                  </h3>

                  {formStatus === "success" ? (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-green-600 dark:text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-dark-600 dark:text-dark-300">
                        Thanks for reaching out. I'll get back to you as soon as
                        possible.
                      </p>
                      <button
                        className="mt-6 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                        onClick={() => setFormStatus(null)}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1"
                          >
                            Full Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                            placeholder="Arnav Arvind"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1"
                          >
                            Email Address
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                            placeholder="arnav@arnavarvind.in"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                          placeholder="How can I help you?"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                          placeholder="Your message here..."
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="submit"
                          disabled={formStatus === "submitting"}
                          className={`btn-primary w-full ${
                            formStatus === "submitting"
                              ? "opacity-75 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          {formStatus === "submitting" ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <FiSend className="mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
