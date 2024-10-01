import verLogo from '../verLogo.png';
import linkedin from '../linkedin.png';
import instagram from '../instagram.png';
import youtube from '../play.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-6 px-5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Company Info */}
        <div className="flex flex-col items-center md:flex-row md:space-x-4">
          <img
            src={verLogo} // Replace with the actual logo image
            alt="Company Logo"
            className="h-14"
          />
          <div>
            <p className="text-lg font-bold">CHINA CITY INDUSTRIAL GROUP CO., LTD</p>
            <p className="mt-1 text-gray-400">info@crrcsh.cc</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold text-[#057E47] mb-3">Follow us</p>
          <div className="flex space-x-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className="h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} className="h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtube} className="h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-gray-500">
            China City Industrial Group (CCIG) CO., LTD. 沪ICP备2023035620号-1
          </p>
          <ul className="flex flex-col md:flex-row md:space-x-4 text-gray-400 space-y-2 md:space-y-0">
            <li><a href="#" className="hover:text-white">ABOUT US</a></li>
            <li><a href="#" className="hover:text-white">PRODUCTS</a></li>
            <li><a href="#" className="hover:text-white">CUSTOMIZATION</a></li>
            <li><a href="#" className="hover:text-white">NEWS</a></li>
            <li><a href="#" className="hover:text-white">CONTACT US</a></li>
            <li><a href="#" className="hover:text-white">English</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="bg-[#057E47] h-1 w-full"></div>

      {/* Back to Top Button */}
      <div className="fixed bottom-4 right-4">
        <a href="#" className="block bg-[#057E47] p-3 rounded-full text-white hover:bg-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
