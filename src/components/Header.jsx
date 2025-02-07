import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu Function
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = (
    <>
      <li onClick={closeMenu}>
        <NavLink to="/" className={({ isActive }) => isActive ? "underline decoration-2 decoration-[#3B63FB] underline-offset-8" : ""}>Home</NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink to="/about" className={({ isActive }) => isActive ? "underline decoration-2 decoration-[#3B63FB] underline-offset-8" : ""}>About Me</NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "underline decoration-2 decoration-[#3B63FB] underline-offset-8" : ""}>Skills</NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "underline decoration-2 decoration-[#3B63FB] underline-offset-8" : ""}>Projects</NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "underline decoration-2 decoration-[#3B63FB] underline-offset-8" : ""}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white fixed  top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto navbar px-4 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Logo */}
          <img src="https://i.ibb.co.com/2rk80jY/Untitled-design-6.png" alt="" />
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 text-lg font-medium">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          {/* Mobile Menu Button (Right Side) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="">
              {isOpen ? <AiOutlineClose size={28} /> : <RiMenu3Line className="font-bold" size={28} />}
            </button>
          </div>

          {/* Desktop Resume Button */}
          <a className="hidden lg:block bg-[#3B63FB] py-2 px-4 text-md font-medium text-white rounded hover:bg-[#2858B5] transition-all duration-300">
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu Drawer with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col items-center gap-4 py-6 text-lg font-medium">
              {links}
              {/* Mobile Resume Button */}
              <li className="mt-3">
                <a className="bg-[#3670EC] py-2 px-4 text-md font-medium text-white rounded hover:bg-[#2858B5] transition-all duration-300">
                  Resume
                </a>
              </li>
              <div className="flex mt-14 gap-4 justify-center md:justify-start mb-6">
              <SlSocialFacebook className="text-2xl" />
              <CiLinkedin className="text-2xl"/>
              <BsTwitterX className="text-2xl"/>
              <ImGithub className="text-2xl"/>
          </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
