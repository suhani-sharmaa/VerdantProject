import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import evbus from "../evbus.jpg";

// Define the animation
const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 }, // Start from below the viewport
  visible: { opacity: 1, y: 0 },  // Animate to its natural position
};

const AutomotiveSection = () => {
  // Intersection Observer for the first section
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Ensures smoother triggering
  });

  // Intersection Observer for the second section
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="space-y-16">
      {/* First Section: Automotive */}
      <motion.div
        ref={ref1} // Attach the ref to observe when the section enters the viewport
        className="flex flex-col md:flex-row justify-between items-center py-12 px-6 md:px-12"
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"} // Animate only when in view
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth slide-in
        variants={slideInFromBottom} // Sliding from the bottom
      >
        {/* Text Content */}
        <div className="md:w-1/2 space-y-4">
          <h4 className="text-lg font-normal text-gray-500">01</h4>
          <h2 className="text-4xl font-bold">Automotive</h2>
          <p className="text-lg text-gray-600">
            We contribute a sustainable environment by eco-friendly energy vehicle.
          </p>
          <button className="bg-[#057E47] text-white py-2 px-6 mt-4 rounded-full hover:bg-red-700 transition duration-300 ease-in-out">
            MORE <span className="ml-2 text-lg">&gt;</span>
          </button>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={evbus}
            alt="Eco-friendly bus"
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Second Section: Intelligent Lifting System */}
      <motion.div
        ref={ref2} // Attach the ref to the second section
        className="flex flex-col md:flex-row justify-between items-center py-12 px-6 md:px-12"
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"} // Animate only when in view
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth slide-in
        variants={slideInFromBottom} // Sliding from the bottom
      >
        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={evbus}
            alt="Intelligent Lifting System"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-4 ml-3">
          <h4 className="text-lg font-normal text-gray-500">02</h4>
          <h2 className="text-4xl font-bold">Intelligent Lifting System</h2>
          <p className="text-lg text-gray-600">
            We aim to achieve an integration of science and arts, as well as a unity of classic
            and fashion in each elevator, with super quality and competitive price, so that
            customers can entirely trust in our products.
          </p>
          <button className="bg-[#057E47] text-white py-2 px-6 mt-4 rounded-full hover:bg-red-700 transition duration-300 ease-in-out">
            MORE <span className="ml-2 text-lg">&gt;</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AutomotiveSection;
