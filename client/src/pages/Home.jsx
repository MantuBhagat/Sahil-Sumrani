// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCode, FiDatabase, FiLayout, FiArrowRight } from "react-icons/fi";
import Certifications from "../components/Certifications";

const skills = [
  { name: "HTML/CSS", level: 90, icon: <FiLayout className="w-6 h-6" /> },
  { name: "JavaScript", level: 85, icon: <FiCode className="w-6 h-6" /> },
  { name: "Python", level: 80, icon: <FiDatabase className="w-6 h-6" /> },
  {
    name: "Data Analysis",
    level: 75,
    icon: <FiDatabase className="w-6 h-6" />,
  },
];

const featuredProjects = [
  {
    title: "Learning Path Dashboard",
    description: "Skill enhancement platform with personalized learning paths",
    tech: ["React", "Node.js", "MongoDB"],
    link: "/projects",
  },
  {
    title: "University Portal",
    description: "Dynamic website for open university colleges",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "/projects",
  },
];

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-slate-100 dark:bg-gradient-to-r from-slate-900 to-slate-800 text-gray-100 dark:text-gray-100">
      {/* Hero Section */}
      <motion.section
        className="px-4 md:px-8 lg:px-12  items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-6xl pt-20 my-auto mx-auto">
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <h1 className=" font-semibold text-center md:text-6xl text-4xl text-gray-800 dark:text-gray-100 mb-4">
              Transforming Ideas into
              <span className="text-blue-600 font-bold dark:text-orange-500">
                {" "}
                Digital Reality
              </span>
            </h1>
            <p className="text-xl mb-10 text-gray-600 dark:text-gray-400 justify-center flex ">
              Full Stack Developer & Data Enthusiast with expertise in modern
              web technologies and data visualization solutions.
            </p>
            <div className="flex  justify-center gap-4 items-center ">
              <Link
                to="/projects"
                className="border-2 border-blue-500 text-white hover:scale-1 dark:border-orange-500 font-semibold   dark:text-white dark:hover:border-white dark:bg-orange-500  bg-blue-500 rounded-lg relative py-3 px-8"
              >
                View My Works
              </Link>
              <Link
                to="/resume-download"
                className="border-2 border-gray-500 hover:scale-1 hover:border-blue-500  font-semibold dark:border-gray-200  dark:hover:border-orange-500 dark:hover:text-orange-500 dark:text-white text-gray-600 hover:text-blue-600 rounded-lg relative py-3 px-8"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 dark:text-white text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 text-gray-800 bg-white dark:bg-slate-200 rounded-xl shadow-sm border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 md:px-8 lg:px-12  ">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold dark:text-white text-gray-800">
              Featured Work
            </h2>

            <Link
              to="/projects"
              className="border-2 border-gray-500 hover:scale-1 hover:border-gray-800 font-semibold dark:border-gray-200 dark:text-white dark:hover:border-white text-gray-800 rounded-lg relative py-3 px-8"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <h3 className="text-xl text-gray-800 font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Learn More
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-12">
        <Certifications />
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center bg-blue-600 rounded-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-lg mb-8">Let's build something amazing together</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
