import { useState, Suspense, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Lazy load videos
const videoSlides = [
  { src: () => import("../Videos/HOME - CCIG.mp4"), alt: 'Slide 1' },
  { src: () => import("../Videos/video.mp4"), alt: 'Slide 2' },
  { src: () => import("../Videos/tractors.mp4"), alt: 'Slide 3' },
  { src: () => import("../Videos/video4.mp4"), alt: 'Slide 4' }
];

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(null);

  const loadVideo = async (slideIndex) => {
    const videoModule = await videoSlides[slideIndex].src();
    setCurrentVideo(videoModule.default);
  };

  const nextSlide = () => {
    const nextSlideIndex = (currentSlide + 1) % videoSlides.length;
    setCurrentSlide(nextSlideIndex);
    loadVideo(nextSlideIndex);
  };

  const handleVideoEnd = () => {
    nextSlide();  // Automatically move to the next video when the current one ends
  };

  // Load the initial video when the component mounts
  useEffect(() => {
    loadVideo(0);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Suspense for Video */}
      <Suspense fallback={<div>Loading Video...</div>}>
        {currentVideo && (
          <video
            key={currentSlide}
            className="absolute inset-0 w-full h-full object-cover"
            src={currentVideo}
            autoPlay
            muted
            onEnded={handleVideoEnd}  // Move to the next video when the current video ends
          />
        )}
      </Suspense>

      {/* Slide Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <h1 className="text-white text-4xl md:text-6xl leading-tight">
          Green Technology
        </h1>
        <h2 className="text-white text-2xl md:text-4xl mt-4">
          Sustainable Future
        </h2>
        <Link to={'/products'} className="mt-3 px-7 flex items-center py-3 bg-gradient-to-br from-green-600 via-emerald-500 to-green-900 text-white rounded-3xl hover:from-green-400 duration-200">
          Our Portfolio <FaArrowRight className="ml-1" />
        </Link>
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
