import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TemplateProduct({ bgImage, Type ,discription, link}) {
  // Set the background image style
    // Intersection Observer for the first section
    const [ref1, inView1] = useInView({
      triggerOnce: true,
      threshold: 0.2, // Ensures smoother triggering
    });
    const slideInFromBottom = {
      hidden: { opacity: 0, y: 100 }, // Start from below the viewport
      visible: { opacity: 1, y: 0 },  // Animate to its natural position
    };
  return (
    <>
      <motion.div
        ref={ref1} // Attach the ref to observe when the section enters the viewport
        className="w-full flex justify-center"
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"} // Animate only when in view
        transition={{ duration: 1, ease: "easeOut" }} // Smooth slide-in
        variants={slideInFromBottom} // Sliding from the bottom
      >
      <div
        className="md:h-104 h-96 md:m-10 bg-black rounded-3xl Template-Project
          w-full m-4 my-10 hover:shadow--3 shadow-lg font-Ankori"  // Responsive width and margin adjustments for small screens
        style={{ backgroundImage: `url(${bgImage})` }} // Apply the background style here
      >
        <div className="w-full h-full flex flex-wrap items-center p-6 backdrop-brightness-50 rounded-3xl">
        <div className="w-full">
          <h1 className="font-semibold tracking-wide text-white 
            text-5xl md:text-6xl md:mt-14" // Responsive text sizes
          >
            {Type}
          </h1>
          <hr className="md:w-1/12 w-1/5 my-7 bg-green-600 h-1 border-none" />
        </div>
        <div className="text-white md:text-xl text-sm font-bold">
          <p>{discription}</p>
        </div>
        <Link
          to={`/products/${link}`}
          className="bg-green-600 w-fit h-12 rounded-full flex items-center text-white 
          px-10 py-6 hover:bg-transparent hover:text-green-600 hover:border-green-600   duration-500 border-2 border-transparent"
        >
          More &gt;
        </Link>
        </div>
      </div>
      </motion.div>
    </>
  );
}
