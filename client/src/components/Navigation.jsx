import { useState } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { id: 1, name: "Home" },
    { id: 2, name: "Projects" },
    { id: 3, name: "Certifications" },
    { id: 4, name: "Contact" },
  ];

  return (
    <nav className="flex space-x-6 border-b border-gray-200">
      {links.map((link, index) => (
        <motion.div
          key={link.id}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <button
            onClick={() => setActiveLink(index)}
            className={`px-4 py-2 text-lg font-medium transition-colors duration-300 ${
              activeLink === index
                ? "text-blue-600 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {link.name}

            {/* Animated underline */}
            {activeLink === index && (
              <motion.div
                className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-blue-500"
                layoutId="underline"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        </motion.div>
      ))}
    </nav>
  );
};

export default Navigation;
