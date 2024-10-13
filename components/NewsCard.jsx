import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
export default function NewsCard({imgUrl,date ,heading ,description}) {
  return (
    <div className=" shadow-[#0000002a] shadow-md m-3 p-2 rounded-md">
      <img src={`${imgUrl}`} className='w-full rounded-md max-h-56' />
      <div className="w-full my-3 px-1 space-y-3">
        <date className = 'text-xs font-extralight'>{date}</date>
        <h1 className='md:text-lg text-md font-bold'>{heading}</h1>
        <p className='md:text-md text-sm'>{description.length<200?description:description.slice(0,200) + "....."}</p>
        <div className="w-full">
        <Link className="w-fit h-10 rounded-md md:text-xl text-md flex justify-center items-center text-white px-4 bg-emerald-600 hover:bg-emerald-700">More Details<FaArrowRight className="ml-2 my-auto w-fit"/></Link>
        </div>
      </div>
    </div>
  )
}
