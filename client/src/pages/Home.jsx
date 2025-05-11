// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCode, FiDatabase, FiLayout, FiArrowRight } from "react-icons/fi";

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
    <div className="bg-slate-200 dark:bg-gradient-to-r from-slate-900 to-slate-700 text-gray-100 dark:text-gray-100">
      {/* Hero Section */}
      <motion.section
        className="px-4 md:px-8 lg:px-12 pt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <h1 className="text-4xl font-mono md:text-5xl  text-gray-800 dark:text-gray-100 mb-4">
              Transforming Ideas into
              <span className="text-blue-600 dark:text-orange-500">
                {" "}
                Digital Reality
              </span>
            </h1>
            <p className="text-xl  text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0">
              Full Stack Developer & Data Enthusiast with expertise in modern
              web technologies and data visualization solutions.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors dark:bg-orange-500"
              >
                Explore Projects
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
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
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Featured Work</h2>

            <motion.Link
              to="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-pink-600 transition-all duration-300"
            >
              View All Projects →
            </motion.Link>

            {/* < className="text-blue-600 hover:text-blue-800 flex items-center border-blue-400 border shadow-sm py-2 px-4 rounded-lg hover:border-blue-800">
              View All <FiArrowRight className="ml-2" />
            </> */}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
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
