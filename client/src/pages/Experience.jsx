// src/pages/Experience.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiBarChart2,
  FiLayout,
  FiDatabase,
} from "react-icons/fi";

const experiences = [
  {
    id: 1,
    title: "Graphic Design Intern",
    company: "Chief Electoral Officer, Delhi",
    duration: "Jan 2025 - Mar 2025",
    skills: ["UI Design", "Branding", "Canva"],
    icon: <FiLayout className="w-6 h-6" />,
    highlights: [
      "30% increase in audience engagement",
      "Digital campaign design",
      "Brand consistency management",
    ],
    type: "internship",
  },
  {
    id: 2,
    title: "Data Analytics Simulation",
    company: "Accenture",
    duration: "Aug 2024",
    skills: ["Data Cleaning", "Power BI", "Trend Analysis"],
    icon: <FiBarChart2 className="w-6 h-6" />,
    highlights: [
      "Analyzed 7 datasets",
      "Created strategic presentations",
      "Client insights delivery",
    ],
    type: "simulation",
  },
  {
    id: 3,
    title: "Data Visualization Specialist",
    company: "Tata Group",
    duration: "Aug 2024",
    skills: ["Tableau", "Dashboard Design", "Stakeholder Reporting"],
    icon: <FiDatabase className="w-6 h-6" />,
    highlights: [
      "25% increase in stakeholder engagement",
      "30% reduction in reporting time",
      "Cross-department collaboration",
    ],
    type: "simulation",
  },
];

const ExperienceCard = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-blue-50 rounded-2xl shadow-lg p-6 mb-6 border-l-4 border-blue-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
          {experience.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold  text-gray-800">
            {experience.title}
          </h3>
          <p className="text-gray-600">{experience.company}</p>
          <p className="text-sm text-gray-500 mt-1">{experience.duration}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <motion.div
            className="mt-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center text-blue-600">
              <span className="mr-2">Key Achievements</span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                <FiChevronDown />
              </motion.span>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-4 mt-2 space-y-2"
                >
                  {experience.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-600 list-disc"
                      initial={{ x: -20 }}
                      animate={{ x: 0 }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [filter, setFilter] = useState("all");

  const filteredExperiences = experiences.filter((exp) =>
    filter === "all" ? true : exp.type === filter
  );

  return (
    <div className="pt-20 px-4bg-slate-200 dark:bg-gradient-to-r from-slate-900 to-slate-700  md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto p-4 pb-10">
        <h1 className="text-4xl font-bold dark:text-white text-gray-800 mb-8">
          Professional Journey
        </h1>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("internship")}
            className={`px-4 py-2 rounded-lg ${
              filter === "internship"
                ? "bg-blue-600 text-white "
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Internships
          </button>
          <button
            onClick={() => setFilter("simulation")}
            className={`px-4 py-2 rounded-lg ${
              filter === "simulation"
                ? "bg-blue-600 text-white "
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Simulations
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredExperiences.length === 0 && (
          <motion.div
            className="text-center py-12 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No experiences found for this category
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Experience;
