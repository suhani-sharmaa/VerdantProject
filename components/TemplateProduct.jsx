import { Link } from "react-router-dom";

export default function TemplateProduct({ bgImage, Type ,discription, link}) {
  // Set the background image style
  return (
    <>
      <div
        className="md:h-104 h-96 md:m-10 m-4 bg-black rounded-3xl Template-Project
          w-full md:w-4/5 hover:shadow--3 shadow-lg font-Ankori"  // Responsive width and margin adjustments for small screens
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
    </>
  );
}
