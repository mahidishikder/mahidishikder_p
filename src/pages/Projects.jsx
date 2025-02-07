import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Scholarship Finder",
    image: "https://i.ibb.co/RThxCCwj/Screenshot-2025-02-05-190302.png",
    description: "A platform that helps students find and apply for scholarships.",
  },
  {
    id: 2,
    name: "Islamic School",
    image: "https://i.ibb.co/bMyfB18J/Screenshot-2025-02-05-194530.png",
    description: "An Islamic school management system for teachers and students.",
  },
  {
    id: 3,
    name: "Lingo Bingo",
    image: "https://i.ibb.co/d0wf22qN/Screenshot-2025-02-06-192835.png",
    description: "A vocabulary learning platform with interactive features.",
  },
  {
    id: 4,
    name: "Pathmala",
    image: "https://i.ibb.co/zWQbkqrd/Screenshot-2025-02-05-192520.png",
    description: "An advanced e-learning platform for online courses.",
  },
  {
    id: 5,
    name: "Visamate",
    image: "https://i.ibb.co/sJHtyKCx/Screenshot-2025-02-06-192556.png",
    description: "A visa processing assistant for global travelers.",
  },
  {
    id: 6,
    name: "Gadget Heaven",
    image: "https://i.ibb.co/0R0ZGsR7/Screenshot-2025-02-06-193114.png",
    description: "An e-commerce store for the latest tech gadgets.",
  },
];

function Projects() {
  return (
    <div className="bg-gray-50 py-30">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-semibold text-[#3B63FB] underline-offset-8 underline mb-12 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white shadow-xl rounded-lg p-6 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={`/projectDetails/${project.id}`}
                className="block text-center bg-[#3B63FB] text-white py-2 px-4 rounded-md hover:bg-[#2a4bd8] transition duration-300"
              >
                View More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;


