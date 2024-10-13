import { Link } from 'react-router-dom'
import img1 from '../Images/Customization/img1.jpg'
import Contactusform from "./Contactusform";
import { useEffect } from 'react';
export default function Customization() {
  useEffect(()=>{
      window.scrollTo(0,0);
      document.title = "Customization-Verdant"
  })
  return (
    <>
           <div className='h-lvh flex flex-wrap items-end bg-cover' style={{ backgroundImage: `url(${img1})` }}>
        <span className='w-full font-Ankori'>
        <h1 className="tracking-widest text-white text-4xl md:text-7xl m-10 mb-0 w-fit">
  CUSTOMIZATION
</h1>
          <hr className="w-1/12 mb-14 mx-10 mt-10 bg-green-700 h-1.5 border-none" />
        </span>
      </div>
      <div className="w-full p-14 text-center font-Ankori">
          <h1 className='mt-10 text-5xl font-bold m-6'>Sustainable customized Solutions</h1>
          <span className='w-full flex justify-center mb-10'><hr className='w-1/12 h-1 bg-green-700'/></span>
          <p className='text-start p-6 text-xl font-thin mb-10'>&ldquo;Design your perfect electric vehicle with our advanced customization options. From selecting eco-friendly materials to choosing the latest tech features, personalize every aspect of your EV to match your style and needs. Create a vehicle that’s uniquely yours with customizable paint finishes, interior fabrics, performance upgrades, and more, all while staying committed to sustainability and innovation.&rdquo;</p>
          </div>
          <div className="BRP min-h-lvh flex justify-center">
            <div className='w-11/12 h-lvh flex flex-wrap items-center text-white'>
            <div className='font-Ankori'>
            <h1 className='text-6xl w-full m-5'>Battery Range & Performance</h1>
            <span className='w-full'><hr className='m-4 ml-6 w-1/12 h-1 bg-green-500 border-0'/></span>
            <p className='m-5 text-xl w-3/5'>&ldquo;Choose from different battery packs to suit your driving needs, whether it&apos;s daily city commuting or long-distance road trips. Customize your EV’s powertrain for optimal performance, offering faster acceleration or enhanced efficiency.&rdquo;
</p>
            <Link
          className="m-5 mt-20 bg-green-600 w-fit h-12 rounded-full flex items-center text-white 
          px-10 py-6 hover:bg-transparent hover:text-green-200 hover:border-green-600   duration-200 border-2 border-transparent"
        >
          More
        </Link>
        </div>
            </div>
      </div>
          <div className="ICF min-h-lvh flex justify-center font-Ankori">
            <div className='w-11/12 h-lvh flex flex-wrap items-center text-white'>
            <div>
            <h1 className='text-6xl w-full m-5'>
            Interior & Comfort Features</h1>
            <span className='w-full'><hr className='m-4 ml-6 w-1/12 h-1 bg-green-500 border-0'/></span>
            <p className='m-5 w-3/5 text-xl '>&ldquo;Tailor your EV’s interior with a variety of eco-friendly materials, customizable seat designs, ambient lighting, and climate control options. Create a luxurious and comfortable driving experience that suits your personal style.&rdquo;</p>
            <Link
          className="m-5 mt-20 bg-green-600 w-fit h-12 rounded-full flex items-center text-white 
          px-10 py-6 hover:bg-transparent hover:text-green-600 hover:border-green-600   duration-500 border-2 border-transparent"
        >
          More
        </Link>
        </div>
            </div>
      </div>
          <div className="EDA min-h-lvh flex justify-center font-Ankori">
            <div className='w-11/12 h-lvh flex flex-wrap items-center text-white'>
            <div>
            <h1 className='text-6xl w-full m-5'>Exterior Design & Aesthetics</h1>
            <span className='w-full'><hr className='m-4 ml-6 w-1/12 h-1 bg-green-500 border-0'/></span>
            <p className='m-5 w-3/5 text-xl'>&ldquo;Select from a range of body colors, unique wheel designs, and aerodynamic kits to give your electric vehicle a bold and distinct look. Add advanced features like solar roof panels or panoramic glass roofs for a futuristic edge.&rdquo;</p>
            <Link
          className="m-5 mt-20 bg-green-600 w-fit h-12 rounded-full flex items-center text-white 
          px-10 py-6 hover:bg-transparent hover:text-green-600 hover:border-green-600   duration-500 border-2 border-transparent"
        >
          More
        </Link>
        </div>
            </div>
      </div>
      <Contactusform
      Title ={'Exclusive service for you'}/>
    </>
  )
}
