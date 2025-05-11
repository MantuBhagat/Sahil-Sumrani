// src/components/ProjectCard.jsx
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Certifications from "./Certifications";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md  hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FiExternalLink className="mr-2" />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <FiGithub className="mr-2" />
              View Code
            </a>
          )}
        </div>

        <Certifications />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
