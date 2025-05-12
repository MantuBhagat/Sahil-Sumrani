// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace with your API endpoint
      await fetch("https://api.example.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error", error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="pt-10 px-4 md:px-8 lg:px-12 min-h-screenbg-white dark:bg-gray-800 text-gray-100 dark:text-gray-100">
      <motion.div
        className="max-w-4xl mx-auto py-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-800 font-semibold">Email</h3>
                  <Link
                    to="mailto:officialsahilarora05@gmail.com"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    officialsahilarora05@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-800 font-semibold">Phone</h3>
                  <a
                    href="tel:8700543448"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    +91 8700 543 448
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white text-gray-800 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Find me on</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com/in/sahil-sumrani-1124712a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 text-gray-600 hover:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiLinkedin className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 text-gray-600 hover:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiGithub className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="p-6 bg-white rounded-xl shadow-sm"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  className="flex items-center gap-2 p-4 bg-green-100 text-green-700 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheckCircle className="w-5 h-5" />
                  Message sent successfully!
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  className="flex items-center gap-2 p-4 bg-red-100 text-red-700 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiAlertCircle className="w-5 h-5" />
                  Error sending message. Please try again.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
