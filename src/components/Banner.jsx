import React from "react";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { PiDownloadSimpleDuotone } from "react-icons/pi";
import { RiContactsBook3Line } from "react-icons/ri";

function Banner() {
  return (
    <div className="bg-blue-100 py-30 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-12 rounded-lg relative">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug mb-4">
      Hi, <br />
      <span className="text-[#3B63FB]">
        <Typewriter
          words={['I am Mahidi']}
          loop={2} // 2 বার টাইপ হবে
          cursor
          cursorStyle="_"
          typeSpeed={200} // টাইপিং স্পিড কমানো হয়েছে
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span> 
      <br /> Web Developer
    </h1>
         
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          I love creating clean, responsive, and user-friendly websites. I enjoy solving problems, learning new technologies, and building web applications that make life easier. My goal is to create smooth and engaging user experiences.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mb-6">
            <Link to={`https://www.facebook.com/profile.php?id=61554271980243`}>
            <img
              className="w-12 cursor-pointer hover:opacity-80 transition duration-300"
              src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png"
              alt="Icon 1"
            /></Link>
            <Link to={`https://x.com/ShikderMah79602`}>
            <img
              className="w-12 cursor-pointer hover:opacity-80 transition duration-300"
              src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png"
              alt="Icon 2"
            /></Link>
           
           <Link to={`https://www.linkedin.com/in/mahidishikder/`}>
           <img
              className="w-12 cursor-pointer hover:opacity-80 transition duration-300"
              src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png"
              alt="Icon 3"
            />
           </Link>
            <Link to={`https://github.com/mahidishikder`}>
            <img
              className="w-12 cursor-pointer hover:opacity-80 transition duration-300"
              src="https://img.icons8.com/?size=50&id=12599&format=png"
              alt="Icon 4"
            />
            </Link>
          </div>
          <div className="flex gap-3 justify-center md:justify-start">
          <button className="mt-6 px-8 py-3 flex gap-2 items-center font-medium bg-[#3B63FB] text-white hover:text-white rounded cursor-pointer shadow-md hover:bg-blue-700 transition">
          <PiDownloadSimpleDuotone href="../../public/resume.pdf" className="text-lg" />Resume
          </button>
          <button className="mt-6 flex items-center gap-2 px-8 py-3 font-medium border-[#3B63FB] text-black hover:text-white border-l-2 border-t-2 bg-white border-1 rounded cursor-pointer shadow-md hover:bg-blue-700 transition">
          <RiContactsBook3Line className="text-lg" />Contact
          </button>
          </div>
        </div>

        {/* Right Side - Image & Cards */}
        <div className="md:w-1/2 flex justify-end mt-6 md:mt-0 relative">
          <img
            src="https://i.ibb.co/0T28Jkx/Remove-background-project-1-photoaidcom-cropped.png"
            alt="Banner"
            className="w-full border-t-2 border-l-2 p-3 max-w-sm md:max-w-md lg:max-w-lg border-blue-600 rounded-full shadow-lg"
          />

          {/* Left Floating Card (Creative Work) */}
          <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute border-blue-600 border-l-2 border-t-2 w-40 md:w-40 lg:w-48 xl:w-56 text-center 
                   left-0 md:left-[-50px] lg:left-[-70px] xl:left-[70px] top-[10%] 
                   bg-white shadow-lg rounded-lg p-4 border 
                   bg-[url('https://img.freepik.com/premium-vector/abstract-geometric-vector-illustration-background-design-ellipse-abstract-background_936939-82.jpg?w=360')] 
                   bg-cover bg-center"
      >
        <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-700">
          Creative Work
        </h3>
        <p className="text-sm lg:text-base xl:text-lg text-gray-500">
          Building UI with passion
        </p>
      </motion.div>

      {/* Right Floating Card */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
        className="absolute border-r-2 border-blue-600 w-40 md:w-40 lg:w-48 xl:w-56 text-center 
                   right-0 md:right-[-50px] lg:right-[-70px] xl:right-[-90px] top-[60%] 
                   bg-white shadow-lg rounded-lg p-4 border 
                   bg-[url('https://img.freepik.com/premium-vector/white-abstract-background-3d-design_336924-3530.jpg')] 
                   bg-cover bg-center"
      >
        <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-700">
          Web Developer
        </h3>
        <p className="text-sm lg:text-base xl:text-lg text-gray-500">
          React & Tailwind Expert
        </p>
      </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner;