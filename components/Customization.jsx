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
           <div className='h-lvh flex flex-wrap items-center bg-cover' style={{ backgroundImage: `url(${img1})` }}>
        <span className='w-full font-Ankori'>
          <h1 className=" tracking-widest text-white 
                  text-4xl md:text-7xl m-10 mb-0">CUSTOMIZATION</h1>
          <hr className="w-1/12 m-14 mt-4 bg-green-700 h-1.5 border-none" />
        </span>
      </div>
      <div className="w-full p-14 text-center font-Ankori">
          <h1 className='mt-10 text-5xl font-bold m-6'>Sustainable customized Solutions</h1>
          <span className='w-full flex justify-center mb-10'><hr className='w-1/12 h-1 bg-green-700'/></span>
          <p className='text-start p-6 text-xl font-thin mb-10'>With our customization service, which is intended to make the customer feel completely in the spotlight, clients can work with a team of professionals to design their own personalized automotive, intelligent lifting system, or energy storage system products.</p>
          </div>
          <div className="EMS min-h-lvh flex justify-center">
            <div className='w-11/12 h-lvh flex flex-wrap items-center text-white'>
            <div className='font-Ankori'>
            <h1 className='text-6xl w-full m-5'>E-mobility Solution</h1>
            <span className='w-full'><hr className='m-4 w-1/6 h-1 bg-green-500 border-0'/></span>
            <p className='m-5 w-full text-xl'>Provide green and convenient transportation methods</p>
            <Link
          className="m-5 mt-20 bg-green-600 w-fit h-12 rounded-full flex items-center text-white 
          px-10 py-6 hover:bg-transparent hover:text-green-600 hover:border-green-600   duration-500 border-2 border-transparent"
        >
          More
        </Link>
        </div>
            </div>
      </div>
          <div className="ILS min-h-lvh flex justify-center font-Ankori">
            <div className='w-11/12 h-lvh flex flex-wrap items-center text-white'>
            <div>
            <h1 className='text-6xl w-full m-5'>
            Intelligent Lifting System</h1>
            <span className='w-full'><hr className='m-4 w-1/6 h-1 bg-green-500 border-0'/></span>
            <p className='m-5 w-full text-xl '>New Steps, New Heights</p>
            <Link
          className="m-5 mt-20 bg-green-600 w-fit h-12 rounded-full flex items-center text-white 
          px-10 py-6 hover:bg-transparent hover:text-green-600 hover:border-green-600   duration-500 border-2 border-transparent"
        >
          More
        </Link>
        </div>
            </div>
      </div>
          <div className="ESS min-h-lvh flex justify-center font-Ankori">
            <div className='w-11/12 h-lvh flex flex-wrap items-center text-white'>
            <div>
            <h1 className='text-6xl w-full m-5'>Energy Storage System</h1>
            <span className='w-full'><hr className='m-4 w-1/6 h-1 bg-green-500 border-0'/></span>
            <p className='m-5 w-full text-xl'>Collect energy, store energy, and exchange for the future</p>
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
