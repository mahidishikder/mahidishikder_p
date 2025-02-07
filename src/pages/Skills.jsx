import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaFire, FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, description: "Markup language for creating web pages." },
    { name: "CSS & Tailwind", icon: <FaCss3Alt className="text-blue-500" />, description: "Styling and layout for web pages." },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, description: "Programming language for web interactivity." },
    { name: "React.js", icon: <FaReact className="text-blue-400" />, description: "JavaScript library for building user interfaces." },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, description: "JavaScript runtime for server-side development." },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" />, description: "Web application framework for Node.js." },
    { name: "MongoDB", icon: <FaDatabase className="text-green-700" />, description: "NoSQL database for handling large amounts of data." },
    { name: "Firebase", icon: <FaFire className="text-yellow-400" />, description: "Cloud platform for backend services." },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" />, description: "Platform for version control and collaboration." },
  ];

  return (
    <div className="bg-gray-100 py-30">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-semibold text-center text-[#3B63FB] underline-offset-8 underline mb-20">
          Skills
        </h2>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:bg-[#3B63FB] hover:text-white hover:shadow-lg"
            >
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="mt-3 text-xl font-semibold">{skill.name}</h3>
              <p className="mt-2 text-gray-600 hover:text-white/50">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
