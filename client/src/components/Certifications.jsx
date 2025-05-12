import { motion } from "framer-motion";
import {
  FaInfinity,
  FaSchool,
  FaIndustry,
  FaCertificate,
  FaGooglePlay,
} from "react-icons/fa";
import { SiPython, SiArduino } from "react-icons/si";

const Certifications = () => {
  const certifications = [
    {
      title: "Programming Fundamentals using Python",
      issuer: "Infosys",
      year: 2024,
      icon: <SiPython className="text-4xl" />,
      points: [],
    },
    {
      title: "Innovation Institution Council",
      issuer: "School of Open Learning",
      year: 2024,
      icon: <FaSchool className="text-4xl" />,
      points: ["Arduino workshop"],
    },
    {
      title: "Empowering Business with Effective Insights",
      issuer: "Tata Group",
      year: 2023,
      icon: <FaIndustry className="text-4xl" />,
      points: [],
    },
    {
      title: "Diploma of Business Accounting",
      issuer: "Shri Ram Computer Education",
      year: 2024,
      icon: <FaCertificate className="text-4xl" />,
      points: [],
    },
    {
      title: "Google Play Store Listing Requirements",
      issuer: "Google Play Academy",
      year: 2024,
      icon: <FaGooglePlay className="text-4xl" />,
      points: [],
    },
  ];

  return (
    <div className="min-h-screenbg-slate-200 dark:bg-gradient-to-r from-slate-900 to-slate-700 text-gray-100 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-8 text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {certification.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {certification.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 text-sm">
                        {certification.issuer}
                      </p>
                      <span className="text-gray-500 text-sm">
                        {certification.year}
                      </span>
                    </div>
                  </div>
                </div>

                {certification.points.length > 0 && (
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    {certification.points.map((point, i) => (
                      <li key={i} className="text-gray-600 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
