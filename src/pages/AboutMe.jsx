import React from 'react';

function AboutMe() {
  return (
    <div className="bg-gray-50 py-30 ">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-20 font-semibold text-[#3B63FB] underline-offset-8 underline ">
            About Me
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 border-l-2 border-t-2 border-[#3B63FB] p-2 overflow-hidden shadow-lg">
              <img
                src="https://i.ibb.co/4gJ01ZBy/Remove-background-project-2.png"
                alt="Profile"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="md:w-2/3 text-center md:text-left">
          <h2 className='text-3xl font-bold mb-10'>I'am Mahidi</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
  I started my journey as a web developer because I love working with computers. I first learned HTML, CSS, and JavaScript, which made me excited to build websites. Over time, I learned more tools like React and Tailwind CSS to make my projects better.
</p>
<p className="text-gray-700 text-lg leading-relaxed mb-6">
  I build websites and web applications. I focus on making websites easy to use and look nice. I enjoy solving problems and learning new things every day. My goal is to become a better developer.
</p>
<p className="text-gray-700 text-lg leading-relaxed">
  Apart from coding, I enjoy reading books, traveling, and spending time with friends. I believe it’s important to have fun and relax along with work. It helps me stay happy and creative.
</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;


