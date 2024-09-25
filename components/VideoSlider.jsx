import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import video1 from "../assets/HOME - CCIG.mp4";
import video2 from "../assets/video.mp4";
import video3 from "../assets/tractors.mp4";
import video4 from "../assets/video4.mp4"

const videoSlides = [
  { src: video1, alt: 'Slide 1' },
  { src: video2, alt: 'Slide 2' },
  { src: video3, alt: 'Slide 3' },
  { src: video4, alt: 'Slide 4' }
];

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % videoSlides.length);
  };

  const handleVideoEnd = () => {
    nextSlide();  // Automatically move to the next video when the current one ends
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        key={currentSlide}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSlides[currentSlide].src}
        autoPlay
        muted
        onEnded={handleVideoEnd}  // Move to the next video when the current video ends
      />

      {/* Slide Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Green Technology
        </h1>
        <h2 className="text-white text-2xl md:text-4xl mt-4">
          Sustainable Future
        </h2>
        <button className="mt-3 px-7 flex items-center py-3 bg-red-600 text-white rounded-3xl hover:bg-red-700 transition-transform duration-300">
          Our Portfolio <FaArrowRight className="ml-1"/>
        </button>
      </div>

      {/* Previous Slide Arrow */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl px-4 focus:outline-none z-10"
        onClick={() => setCurrentSlide((currentSlide - 1 + videoSlides.length) % videoSlides.length)}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      {/* Next Slide Arrow */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl px-4 focus:outline-none z-10"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
}; 

export default VideoSlider;
