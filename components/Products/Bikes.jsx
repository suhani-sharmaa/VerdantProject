
import bike from '../../Images/ProductsImages/type1.jpg'
import Footer from '../Footer'
export default function Bikes() {
  return (
    <>
      <div className='h-lvh flex flex-wrap items-end bg-cover' style={{ backgroundImage: `url(${bike})`}}>
        <span className='w-full'>
        <h1 className="font-semibold tracking-widest text-white 
                  text-4xl md:text-9xl m-10 mb-0"
                >Bikes</h1>
          <hr className="w-1/6 m-14 mt-4 bg-green-600 h-1.5 border-none"/>
            </span>
          </div>
    <Footer/>
    </>
  )
}
