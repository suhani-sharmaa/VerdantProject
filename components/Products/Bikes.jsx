
import bike from '../../Images/ProductsImages/type1.jpg'
export default function Bikes() {
  return (
    <>
    <div className='absolute w-full h-lvh'>
    <img src={bike} className='h-full w-full' />
    <h1 className="font-semibold tracking-wide text-white 
            text-4xl md:text-6xl md:mt-14"
          >Bikes</h1>
          <hr className="w-1/12 my-7 bg-green-600 h-1 border-none"/>
    </div>
    </>
  )
}
