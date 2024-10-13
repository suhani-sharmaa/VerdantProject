import verLogo from '../Images/Logo/verLogo.png';
import linkedin from '../Images/Social/linkedin.png';
import instagram from '../Images/Social/instagram.png';
import youtube from '../Images/Social/play.png';
import facebook from '../Images/Social/facebook.png';
import twitter from '../Images/Social/twitter.png';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-Ankori">
      <div className="container mx-auto py-6 px-5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Company Info */}
        <div className="flex flex-col items-center md:flex-row md:space-x-4 w-full md:m-0 my-5">
          <img
            src={verLogo} // Replace with the actual logo image
            alt="Company Logo"
            className="md:h-14 h-15 rounded-md"
          />
          <div className='w-full py-4'>
            <p className="text-lg font-bold">VERDANT AUTOBOTS</p>
            <p className="mt-1 text-gray-400">verdant@info.com</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:w-1/5 w-full">
          <div className="flex space-x-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className="h-8 hover:scale-110 duration-100" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} className="h-8 hover:scale-110 duration-100" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtube} className="h-8 hover:scale-110 duration-100" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} className="h-8 hover:scale-110 duration-100" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} className="h-8 hover:scale-110 duration-100" />
            </a>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-gray-500">
            Verdant Autobots Pvt. Ltd.
          </p>
          <ul className="flex flex-col md:flex-row md:space-x-4 text-gray-400 space-y-2 md:space-y-0">
            <li><Link to='/aboutus' className="hover:text-white">ABOUT US</Link></li>
            <li><Link to='/products' className="hover:text-white">PRODUCTS</Link></li>
            <li><Link to='/customization' className="hover:text-white">CUSTOMIZATION</Link></li>
            <li><Link to='/news' className="hover:text-white">NEWS</Link></li>
            <li><Link to='/contactus' className="hover:text-white">CONTACT US</Link></li>
            <li><Link to='/' className="hover:text-white">English</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="bg-[#057E47] h-1 w-full"></div>

      {/* Back to Top Button */}
      <div className="fixed bottom-4 right-4">
        <button onClick={()=>{window.scrollTo(0,0)}} className="block bg-[#057E47] p-3 rounded-full text-white hover:bg-emerald-600 duration-200">
          <FaArrowUp className='h-5 w-5'/>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
