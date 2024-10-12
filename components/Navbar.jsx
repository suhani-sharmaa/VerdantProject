import { useState, useEffect } from 'react';
import verLogo from '../Images/Logo/verLogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsScrolled(!isScrolled);
    setIsOpen(!isOpen);
  };
  // let Links = document.querySelectorAll('Link');
  // Links.forEach((ele)=>{
  //   ele.addEventListener('click',()=>{
  //   });
  // })
  // Change navbar background on scroll
  useEffect(() => {
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
    <nav className={`font-Ankori fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${isScrolled ? 'bg-[#057E47]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with white box */}
          <div className="flex-shrink-0 cursor-pointer">
            <img
              className="h-12"
              src={verLogo}
              alt="Logo"
            />
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:block">
            <div className={`ml-10 flex items-baseline space-x-4 ${isScrolled ? 'text-white' : 'text-gray-500'}`}>
            <Link to='/' className=" hover:scale-110 transition-transform duration-200 hover:text-white px-3 py-2 text-sm font-medium">HOME</Link>
              <Link to='/products' className=" hover:scale-110 transition-transform duration-200 hover:text-white px-3 py-2 text-sm font-medium">PRODUCTS</Link>
              <Link to='/customization' className=" hover:scale-110 transition-transform duration-200 hover:text-white px-3 py-2 text-sm font-medium">CUSTOMIZATION</Link>
              <Link to='/news' className=" hover:scale-110 transition-transform duration-200 hover:text-white px-3 py-2 text-sm font-medium">NEWS</Link>
              <Link to='/Aboutus' className=" hover:scale-110 transition-transform duration-200 hover:text-white px-3 py-2 text-sm font-medium">ABOUT US</Link>
              <Link to='/contactus' className=" hover:scale-110 transition-transform duration-200 hover:text-white px-3 py-2 text-sm font-medium">CONTACT US</Link>
            </div>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-white focus:outline-none"
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
            <Link to='/' className="text-white hover:text-white px-3 py-2 text-sm font-medium">HOME</Link>
              <Link className="text-white hover:text-white px-3 py-2 text-sm font-medium">PRODUCTS</Link>
              <Link className="text-white hover:text-white px-3 py-2 text-sm font-medium">CUSTOMIZATION</Link>
              <Link className="text-white hover:text-white px-3 py-2 text-sm font-medium">NEWS</Link>
              <Link className="text-white hover:text-white px-3 py-2 text-sm font-medium">ABOUT US</Link>
              <Link className="text-white hover:text-white px-3 py-2 text-sm font-medium">CONTACT US</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
