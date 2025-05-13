import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      className="sticky top-0 w-full z-50 backdrop-blur-lg dark:bg-slate-800 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold  dark:text-orange-500 text-blue-600"
          >
            Sahil Sumrani
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-gray-800 active:text-blue-500 dark:text-white"
                    : "dark:text-white text-gray-800"
                } hover:text-blue-600`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 dark:bg-orange-500"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/login"
              className="py-2 px-5 hover:bg-blue-700 bg-blue-500 dark:bg-orange-600 text-white rounded-md dark:hover:bg-orange-700 transition"
            >
              Login
            </Link>
            <ThemeToggleButton />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggleButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl dark:text-white"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold ${
                  isActive(link.path)
                    ? "text-orange-500 "
                    : "text-gray-800 dark:text-white"
                } hover:text-orange-600`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block py-2 px-4 text-center bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
