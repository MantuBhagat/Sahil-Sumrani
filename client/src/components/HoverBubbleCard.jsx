import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const bubbles = Array.from({ length: 6 });

const HoverBubbleCard = () => {
  return (
    <motion.div
      whileHover="hover"
      className="relative w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-2xl overflow-hidden cursor-pointer group"
    >
      {/* Main Icon */}
      <FaReact className="text-6xl z-10 transition-transform duration-300 group-hover:scale-110" />

      {/* Floating Bubbles */}
      {bubbles.map((_, i) => (
        <motion.span
          key={i}
          variants={{
            hover: {
              y: -80 - Math.random() * 40,
              opacity: 0,
              scale: 1.5,
              transition: {
                duration: 1.2,
                delay: i * 0.1,
              },
            },
            initial: {
              y: 0,
              opacity: 0.6,
              scale: 1,
            },
          }}
          initial="initial"
          className="absolute bottom-6 w-3 h-3 bg-white/40 rounded-full blur-sm"
          style={`{
            left: ${20 + i * 25}px,
          }`}
        />
      ))}
    </motion.div>
  );
};

export default HoverBubbleCard;
