import React from 'react';
import { useParams } from 'react-router-dom';

// Dummy data for project details (you can replace this with actual data)
const projects = [
  {
    id: 1,
    name: "Scholarship Finder",
    description: "A platform that helps students find and apply for scholarships.",
    techStack: "React, Node.js, MongoDB",
    challenges: "Handling large datasets, ensuring user authentication",
    futurePlans: "Adding more scholarship sources, improving user interface",
    liveLink: "https://final-cf7ce.web.app",
    githubLink: "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-mahidishikder.git",
    images: 'https://i.ibb.co/RThxCCwj/Screenshot-2025-02-05-190302.png'
  },
  {
    id: 2,
    name: "Islamic School",
    description: "An Islamic school management system for teachers and students.",
    techStack: "React, Express, MySQL",
    challenges: "Integrating various teacher-student functionalities",
    futurePlans: "Mobile app development, adding more features for teachers",
    liveLink: "https://pnkm.netlify.app/",
    githubLink: "https://github.com/mahidishikder/pakdi_nurani_cadet_madrasah_client",
    images:'https://i.ibb.co/bMyfB18J/Screenshot-2025-02-05-194530.png'
  },
  {
    id: 3,
    name: "Lingo Bingo",
    description: "A vocabulary learning platform with interactive features.",
    techStack: "React, Firebase, Tailwind CSS",
    challenges: "Managing multiple languages efficiently",
    futurePlans: "Adding AI-based learning recommendations",
    liveLink: "https://lingo-bingo-learning.netlify.app/",
    githubLink: "https://github.com/programming-hero-web-course1/b10-a9-authentication-mahidishikder.git",
    images:'https://i.ibb.co/d0wf22qN/Screenshot-2025-02-06-192835.png'

  },
  {
    id: 4,
    name: "Pathmala",
    description: "An advanced e-learning platform for online courses.",
    techStack: "Next.js, PostgreSQL, Prisma",
    challenges: "Implementing real-time quizzes and assessments",
    futurePlans: "Adding certification and accreditation features",
    liveLink: "https://pathmala.web.app/",
    githubLink: "https://github.com/programming-hero-web-course2/b10a11-server-side-mahidishikder",
    images:'https://i.ibb.co/zWQbkqrd/Screenshot-2025-02-05-192520.png'

    
  },
  {
    id: 5,
    name: "Visamate",
    description: "A visa processing assistant for global travelers.",
    techStack: "Vue.js, Firebase, Stripe API",
    challenges: "Handling payment processing and multi-step forms",
    futurePlans: "Supporting more countries and languages",
    liveLink: "https://visamate-d18be.web.app/",
    githubLink: "https://github.com/programming-hero-web-course2/b10-a10-client-side-mahidishikder.git",
    images:'https://i.ibb.co/sJHtyKCx/Screenshot-2025-02-06-192556.png'

  },
  {
    id: 6,
    name: "Gadget Heaven",
    description: "An e-commerce store for the latest tech gadgets.",
    techStack: "React, Redux, Firebase",
    challenges: "Managing inventory and handling secure transactions",
    futurePlans: "Adding AI-based recommendations and chatbot support",
    liveLink: "https://gadgetheavenh.netlify.app",
    githubLink: "https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-mahidishikder.git",
    images:'https://i.ibb.co/0R0ZGsR7/Screenshot-2025-02-06-193114.png'

  },
];


function ProjectDetails() {
  const { id } = useParams(); // Get project id from URL parameters
  const project = projects.find(p => p.id === parseInt(id)); // Find the project by id

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="bg-gray-100  px-6 md:px-12 py-32">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-semibold text-[#3B63FB] mb-6">{project.name}</h2>
        
        <div className="mb-6">
          <img 
            src={project.images} // Add your project image here
            alt={project.name}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Project Description</h3>
        <p className="text-lg text-gray-700 mb-6">{project.description}</p>

        <h3 className="text-2xl font-semibold mb-3">Technology Stack</h3>
        <p className="text-lg text-gray-700 mb-6">{project.techStack}</p>

        <h3 className="text-2xl font-semibold mb-3">Challenges Faced</h3>
        <p className="text-lg text-gray-700 mb-6">{project.challenges}</p>

        <h3 className="text-2xl font-semibold mb-3">Future Plans & Improvements</h3>
        <p className="text-lg text-gray-700 mb-6">{project.futurePlans}</p>

        <div className="flex gap-6">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-[#3B63FB] text-white py-2 px-4 rounded-md hover:bg-[#2858B5] transition duration-300 text-lg"
          >
            Live Project
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 text-lg"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

