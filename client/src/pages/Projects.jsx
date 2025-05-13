import { motion } from "framer-motion";
import { FaBook, FaUniversity, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Learning Path & Dashboard",
      org: "Government of India",
      duration: "Aug 2024 - Sep 2024",
      description:
        "Skill enhancement platform with personalized learning paths and real-time progress dashboards",
      points: [
        "35% improvement in student engagement",
        "Enhanced skill acquisition rate",
        "Personalized learning paths",
      ],
      tech: [
        <SiMongodb />,
        <SiExpress />,
        <FaReact />,
        <FaNodeJs />,
        <SiTailwindcss />,
      ],
      link: "learningpath.free.nf",
      icon: <FaBook className="text-4xl" />,
    },
    {
      title: "University Updates Portal",
      org: "School of Open Learning, Delhi",
      duration: "Aug 2024 - Sep 2024",
      description: "Dynamic website for open university colleges updates",
      points: [
        "50,000+ monthly users",
        "Real-time updates system",
        "Multi-institution support",
      ],
      tech: [
        <SiMongodb />,
        <SiExpress />,
        <FaReact />,
        <FaNodeJs />,
        <SiTailwindcss />,
      ],
      link: "university-updates.co.in",
      icon: <FaUniversity className="text-4xl" />,
    },
  ];

  return (
    <div className="bg-slate-200 dark:bg-gradient-to-r from-slate-900 to-slate-800 text-gray-100 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white  rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold  text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.org}</p>
                  <p className="text-sm text-gray-500">{project.duration}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{project.description}</p>

              <ul className="list-disc list-inside mb-4 text-gray-600">
                {project.points.map((point, i) => (
                  <li key={i} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="border-t pt-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 mr-2">
                    Tech Stack:
                  </span>
                  <div className="flex space-x-2 text-2xl">
                    {project.tech.map((Icon, i) => (
                      <span
                        key={i}
                        className="text-gray-500 hover:text-blue-600"
                      >
                        {Icon}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={`https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  {project.link}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
