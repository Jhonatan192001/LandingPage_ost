import Logo from "../../public/LogoOST.png";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
      <div className="bg-[#0084F1] bg-opacity-90 rounded-b-3xl md:rounded-b-full container mx-auto px-4 py-2 lg:py-4 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0">
            <a href="#">
              <img src={Logo} className="h-10 md:h-12 lg:h-14" alt="Logo Ost" />
            </a>
            <div className="sm:hidden flex space-x-4">
              <a
                href="#"
                className="text-xl text-white transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-xl text-white transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="hidden md:block w-full sm:w-auto">
            <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <li className="flex items-center w-full sm:w-auto">
                <FaLocationDot className="text-lg text-white mr-2 transition-colors duration-300" />
                <span className="text-sm lg:text-base text-white transition-colors duration-300">
                  Av. Carlos Izaguirre N°
                </span>
              </li>
              <li className="flex items-center w-full sm:w-auto">
                <FaPhone className="text-lg text-white mr-2 transition-colors duration-300" />
                <span className="text-sm lg:text-base text-white transition-colors duration-300">
                  (480) 555-0103
                </span>
              </li>
              <li className="flex items-center w-full sm:w-auto">
                <FaEnvelope className="text-lg text-white mr-2 transition-colors duration-300" />
                <span className="text-sm lg:text-base text-white transition-colors duration-300">
                  Info@youremail.com
                </span>
              </li>
            </ul>
          </div>
          <div className="hidden sm:flex items-center space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-xl text-white transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-xl text-white transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
