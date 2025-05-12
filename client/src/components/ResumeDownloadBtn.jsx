import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const ResumeDownloadBtn = () => {
  // डाउनलोड फंक्शन
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // add pdf or file here
    link.download = "YourName_Resume.pdf"; // default path name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 4px 20px rgba(99, 102, 241, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
    >
      <div className="flex items-center gap-3">
        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="text-xl"
        >
          <FaDownload />
        </motion.span>
        Download Resume
      </div>

      {/* ग्लोइंग इफेक्ट */}
      <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};

export default ResumeDownloadBtn;
