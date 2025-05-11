// src/components/AnimatedSection.jsx
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AnimatedSection = ({ title, children }) => {
  return (
    <motion.section
      className="py-12"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800">{title}</h2>
      {children}
    </motion.section>
  );
};
