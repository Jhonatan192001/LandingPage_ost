import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0084F1] font-bold w-full py-6 border-t-2 border-blue-500">
      <div className="container mx-auto px-4">
        <ul className="flex flex-col sm:flex-row justify-center items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <li className="flex items-center">
            <FaLocationDot className="text-xl text-white mr-2 flex-shrink-0" />
            <span className="text-white transition-colors duration-300 hover:text-blue-200">
              Av. Carlos Izaguirre N°
            </span>
          </li>
          <li className="flex items-center">
            <FaPhone className="text-xl text-white mr-2 flex-shrink-0" />
            <a href="tel:+14805550103" className="text-white hover:text-blue-200 transition-colors duration-300">
              (480) 555-0103
            </a>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="text-xl text-white mr-2 flex-shrink-0" />
            <a href="mailto:Info@youremail.com" className="text-white hover:text-blue-200 transition-colors duration-300">
              Info@youremail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;