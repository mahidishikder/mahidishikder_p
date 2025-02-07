import { FiPhoneCall } from "react-icons/fi";
import { MdAttachEmail } from "react-icons/md";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

const Contact = () => {
  return (
    <div className="flex justify-center items-center py-30 bg-gray-100">
      <div className="max-w-2xl w-full p-8 py-20 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Get in Touch
        </h2>

        {/* Contact Info */}
        <div className="space-y-4 mb-6 text-center">
          <p className="flex items-center justify-center gap-2 text-gray-700">
            <MdAttachEmail size={20} />
            <strong>Email:</strong>
            <a
              href="mailto:your-email@example.com"
              className="text-blue-600 hover:underline"
            >
              your-email@example.com
            </a>
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-700">
            <FiPhoneCall size={20} />
            <strong>Phone:</strong>
            <a href="tel:+8801965177257" className="text-blue-600 hover:underline">
              +8801965177257
            </a>
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-700">
            <PiWhatsappLogoDuotone size={20} />
            <strong>WhatsApp:</strong>
            <a
              href={`https://wa.me/8801965177257`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              +8801965177257
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


