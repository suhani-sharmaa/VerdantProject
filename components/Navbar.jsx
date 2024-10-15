import { useState, useEffect } from 'react';
import verLogo from '../Images/Logo/verLogo.png';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  const[current , setCurrent] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsScrolled(!isScrolled);
    setIsOpen(!isOpen);
  };

  // Change navbar background on scroll
  useEffect(() => {
    setCurrent(location.pathname);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(isOpen);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav className={`font-Ankori fixed top-0 left-0 w-full z-50 transition-colors ${isScrolled ? 'bg-[#078d50]' : 'bg-transparent'}  duration-200`}>
{current!='/admin' && <Link to={'/admin'} className='absolute h-10 flex items-center justify-center p-2 right-0 top-28 bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 text-gray-200 rounded-l-3xl'>Are You Admin?<p className='scale-105 m-1 text-white'>Login Here</p><FaArrowRight className='m-2'/></Link>}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with white box */}
          <div className="cursor-pointer px-1">
            <img
              className="h-16 hover:scale-110 duration-200 hover:brightness-125"
              src={verLogo}
              alt="Logo"
            />
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:block">
            <div className={`ml-10 flex items-baseline space-x-4
              text-${isScrolled?'white':'slate-00'} text-md font-Ankori text-white`}>
              <Link to='/' className=" hover:scale-110 transition-transform duration-200 px-3 py-2">HOME</Link>
              <Link to='/products' className=" hover:scale-110 transition-transform duration-200 px-3 py-2">PRODUCTS</Link>
              <Link to='/customization' className=" hover:scale-110 transition-transform duration-200 px-3 py-2">CUSTOMIZATION</Link>
              <Link to='/news' className=" hover:scale-110 transition-transform duration-200 px-3 py-2">NEWS</Link>
              <Link to='/Aboutus' className=" hover:scale-110 transition-transform duration-200 px-3 py-2">ABOUT US</Link>
              <Link to='/contactus' className=" hover:scale-110 transition-transform duration-200 px-3 py-2">CONTACT US</Link>
            </div>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu (visible when open) */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 mt-4">
            <Link to='/' className="text-white px-3 py-2">HOME</Link>
              <Link to='/products' className="text-white px-3 py-2">PRODUCTS</Link>
              <Link to='/customization' className="text-white px-3 py-2">CUSTOMIZATION</Link>
              <Link to='/news' className="text-white px-3 py-2">NEWS</Link>
              <Link to='/Aboutus' className="text-white px-3 py-2">ABOUT US</Link>
              <Link to='/contactus' className="text-white px-3 py-2">CONTACT US</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
