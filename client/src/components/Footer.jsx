// src/components/Footer.jsx
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiArrowUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    <motion.footer
      className="  dark:bg-gradient-to-r rounded-bl from-slate-800 to-slate-700  dark:text-white text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-18 mb-12">
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 ">Sahil Sumrani</h3>
            <p className="text-sm">
              Aspiring Web Developer specializing in modern web technologies and
              data visualization.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className=" p-4">
            <h3 className="text-xl font-semibold mb-4 ">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/experience"
                className="block hover:text-blue-400 transition-colors"
              >
                Experience
              </Link>
              <Link
                to="/projects"
                className="block hover:text-blue-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="pl-4">
            <h3 className="text-xl font-semibold mb-4 ">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FiMail className="flex-shrink-0" />
                <a
                  href="mailto:officialsahilarora05@gmail.com"
                  className="hover:text-blue-400"
                >
                  officialsahilarora05@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="flex-shrink-0" />
                <a href="tel:+918700543448" className="hover:text-blue-400">
                  +91 8700 543 448
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="p-4">
            <h3 className="text-xl font-semibold mb-4 ">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com/in/sahil-sumrani-1124712a7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-white hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-white hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <FiGithub className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Back to Top & Copyright */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Sahil Sumrani. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-2 bg-gray-800 rounded-lg text-white hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
