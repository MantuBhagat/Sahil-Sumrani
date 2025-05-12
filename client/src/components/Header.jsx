// src/components/Header.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { ThemeToggleButton } from "./ThemeToggleButton.jsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="shadow-transparent shadow-lg sticky top-0 dark:bg-opacity-10 backdrop-blur-lg dark:bg-gradient-to-r from-slate-900 to-slate-800 dark:text-white w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container  mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold dark:text-orange-500 text-blue-600"
          >
            Sahil Sumrani
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 text-lg font-medium  transition-colors duration-300 `}
              >
                <motion.div
                  className="absolute "
                  layoutId="underline"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
                <Link
                  to={link.path}
                  className="dark:text-white hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex">
            <ThemeToggleButton />

            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
          <Link
            to="/login"
            className="py-2 px-5 bg-orange-600  rounded-md text-white"
          >
            Login
          </Link>
        </div>

        {/* Mobile Navigation */}

        {isOpen && (
          <motion.div
            className="md:hidden mt-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {navLinks.map((link) => (
              <motion.div key={link.path} whileHover={{ scale: 1.05 }}>
                <Link
                  to={link.path}
                  className="block py-2 text-gray-900 font-semibold hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
