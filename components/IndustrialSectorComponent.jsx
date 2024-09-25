import React, { useState, useEffect, useRef } from 'react';
import { FaBusAlt, FaArrowCircleUp } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { MdDirectionsRailway } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";

const IndustrialSector = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (!visibleSections.includes(index)) {
              setVisibleSections((prevVisibleSections) => [...prevVisibleSections, index]);
            }
          }
        });
      },
      { threshold: 0.9} // Trigger when 20% of the section is visible
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup the observer when the component unmounts
    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [visibleSections]);

  const sectionDelay = (index) => `${0.4 * index}s`;

  return (
    <div className="bg-black text-white min-h-screen p-10">
      {/* Header section */}
      <div className="text-center mb-10">
        <h2 className="text-sm uppercase tracking-widest text-gray-400">what we do</h2>
        <h1 className="text-5xl font-extrabold text-[#057E47]  mt-4">INDUSTRIAL SECTOR</h1>
        <p className="mt-4 text-xl text-gray-300">
          Digital Transportation Service Provider <br />
          International Strategic Transforming Industries Organizer
        </p>
      </div>

      {/* Icon section - Responsive for Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center text-center">
        {/* Automotive */}
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className={`flex flex-col items-center p-4 transition-opacity duration-1000 ease-in-out ${
            visibleSections.includes(0) ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: visibleSections.includes(0) ? sectionDelay(1) : '0s' }}
        >
          <div className="text-6xl text-[#057E47] mb-4 hover:text-white duration-500"><FaBusAlt /></div>
          <h3 className="text-xl font-semibold">Automotive</h3>
          <p className="text-gray-400">
            Interconnect manufacturing platform for commercial & specialized vehicle.
          </p>
        </div>

        {/* Intelligent Lifting System */}
        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          className={`flex flex-col items-center p-4 transition-opacity duration-1000 ease-in-out ${
            visibleSections.includes(1) ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: visibleSections.includes(1) ? sectionDelay(2) : '0s' }}
        >
          <div className="text-6xl text-[#057E47] mb-4 hover:text-white duration-500"><FaArrowCircleUp /></div>
          <h3 className="text-xl font-semibold">Intelligent Lifting System</h3>
          <p className="text-gray-400">
            Integrate design, manufacture, sales, installation, and services for modern professional elevator & escalator production enterprise.
          </p>
        </div>

        {/* Agricultural Machines */}
        <div
          ref={(el) => (sectionRefs.current[2] = el)}
          className={`flex flex-col items-center p-4 transition-opacity duration-1000 ease-in-out ${
            visibleSections.includes(2) ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: visibleSections.includes(2) ? sectionDelay(3) : '0s' }}
        >
          <div className="text-6xl text-[#057E47] mb-4 hover:text-white duration-500"><GiThreeLeaves /></div>
          <h3 className="text-xl font-semibold">Agricultural Machines</h3>
          <p className="text-gray-400">
            Integrate R&D, manufacturing, sales, and services to provide the best agricultural machines.
          </p>
        </div>
      </div>

      {/* Repeat section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center text-center">
        {/* Energy Storage System */}
        <div
          ref={(el) => (sectionRefs.current[3] = el)}
          className={`flex flex-col items-center p-4 transition-opacity duration-1000 ease-in-out ${
            visibleSections.includes(3) ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: visibleSections.includes(3) ? sectionDelay(4) : '0s' }}
        >
          <div className="text-6xl text-[#057E47] mb-4 hover:text-white duration-500"><SlEnergy /></div>
          <h3 className="text-xl font-semibold">Energy Storage System</h3>
          <p className="text-gray-400">
            Enable engineers to manage the power system optimally with new category.
          </p>
        </div>

        {/* Autonomous Rail Rapid Transit */}
        <div
          ref={(el) => (sectionRefs.current[4] = el)}
          className={`flex flex-col items-center p-4 transition-opacity duration-1000 ease-in-out ${
            visibleSections.includes(4) ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: visibleSections.includes(4) ? sectionDelay(5) : '0s' }}
        >
          <div className="text-6xl text-[#057E47] mb-4 hover:text-white duration-500"><MdDirectionsRailway /></div>
          <h3 className="text-xl font-semibold">Autonomous Rail Rapid Transit</h3>
          <p className="text-gray-400">
            Provide cities with intelligent and autonomous solutions for urban rapid transportation.
          </p>
        </div>

        {/* Customization */}
        <div
          ref={(el) => (sectionRefs.current[5] = el)}
          className={`flex flex-col items-center p-4 transition-opacity duration-1000 ease-in-out ${
            visibleSections.includes(5) ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: visibleSections.includes(5) ? sectionDelay(6) : '0s' }}
        >
          <div className="text-6xl text-[#057E47] mb-4 hover:text-white duration-500"><PiNotepad /></div>
          <h3 className="text-xl font-semibold">Customization</h3>
          <p className="text-gray-400">
            Contribute worldwide R&D center with thorough design capability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrialSector;
