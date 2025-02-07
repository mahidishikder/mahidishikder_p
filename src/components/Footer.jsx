import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center px-4">
        {/* নাম */}
        <h2 className="text-3xl sm:text-4xl font-bold pt-8 pb-6">Mahidi Shikder</h2>

        {/* সোশ্যাল মিডিয়া */}
        <div className="flex justify-center pb-5 space-x-4 sm:space-x-6 my-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl sm:text-4xl hover:text-blue-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl sm:text-4xl hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl sm:text-4xl hover:text-blue-600 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl sm:text-4xl hover:text-gray-400 transition" />
          </a>
        </div>

        {/* কন্টাক্ট ইনফো */}
        <p className="text-base sm:text-lg text-gray-300">Email: mahidishikder@gmail.com</p>
        <p className="text-base sm:text-lg text-gray-300">Phone: +8801965177257</p>

        {/* কপিরাইট */}
        <p className="text-sm sm:text-lg text-gray-500 mt-5">
          © {new Date().getFullYear()} Mahidi Shikder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


