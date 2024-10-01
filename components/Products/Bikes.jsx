
import bike from '../../Images/ProductsImages/type1.jpg'
import bikebg1 from '../../Images/ProductsImages/bikebg1.jpg'
import highlight1 from '../../Images/ProductsImages/highlight1.jpg'
import highlight2 from '../../Images/ProductsImages/highlight2.jpg'
import highlight3 from '../../Images/ProductsImages/highlight3.jpg'
import highlight4 from '../../Images/ProductsImages/highlight4.jpg'
import highlight5 from '../../Images/ProductsImages/highlight5.jpg'
import highlight6 from '../../Images/ProductsImages/highlight6.jpg'
import color1 from '../../Images/ProductsImages/color1.jpg'
import color2 from '../../Images/ProductsImages/color2.jpg'
import color3 from '../../Images/ProductsImages/color3.jpg'
import color4 from '../../Images/ProductsImages/color4.jpg'
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
    <section className='h-lvh w-full bg-cover flex flex-wrap justify-center items-start'
    style={{ backgroundImage: `url(${bikebg1})`}}>
      <span className='text-white flex flex-wrap h-1/4 w-3/4 text-center m-10'>
        <h1 className='md:text-5xl w-full'>Exterior</h1>
        <p className='md:text-xl'>With a slim body line and vivid colors, our mini car is equipped with soundproofing and absorbing
        materials to provide a quiet and pleasant driving experience.</p>
      </span>
    </section>
    <section className='w-full flex justify-center'>
      <div className="w-11/12 flex justify-evenly my-32">
      <div className='w-1/3 text-center mx-4'>
        <img className='w-full' src={highlight1} alt="highlight1" />
        <h1 className='m-2'>headlight</h1>
        </div>
        <div className='w-1/3 text-center mx-4'>
        <img className='w-full' src={highlight2} alt="highlight1" />
        <h1 className='m-2'>tail light</h1>
        </div>
        <div className='w-1/3 text-center mx-4'>
        <img className='w-full' src={highlight3} alt="highlight1" />
        <h1 className='m-2'>Charging System</h1>
        </div>
      </div>
    </section>
    <section className='w-full h-lvh flex flex-wrap justify-center items-end'
    style={{ backgroundImage: `url(${bikebg1})`}}>
      <span className='text-white flex flex-wrap h-1/4 w-3/4 text-center'>
        <h1 className='md:text-5xl w-full'>Interior</h1>
        <p className='md:text-xl'>LED gauge cluster for better visibility on driving information, various storage and cigar lighter socket to increase convenience,
        radio and USB MP3 Player to offer enjoyable driving experience.</p>
      </span>
    </section>
    <section className='w-full flex justify-center'>
      <div className="w-11/12 flex justify-evenly my-32">
      <div className='w-1/3 text-center mx-4'>
        <img className='w-full' src={highlight4} alt="highlight1" />
        <h1 className='m-2'>headlight</h1>
        </div>
        <div className='w-1/3 text-center mx-4'>
        <img className='w-full' src={highlight5} alt="highlight1" />
        <h1 className='m-2'>tail light</h1>
        </div>
        <div className='w-1/3 text-center mx-4'>
        <img className='w-full' src={highlight6} alt="highlight1" />
        <h1 className='m-2'>Charging System</h1>
        </div>
      </div>
    </section>
    <section className='w-full h-lvh flex flex-wrap justify-center items-start'
    style={{ backgroundImage: `url(${bikebg1})`}}>
      <span className='text-white flex flex-wrap h-1/4 w-3/4 text-center m-20'>
        <h1 className='md:text-5xl w-full'>SPACE FRAME BODY</h1>
        <p className='md:text-xl'>The rigid space frame, in-battery extinguisher and MSD(Manual Service Disconnect) enable
        better safety and weight reduction at the same time.</p>
      </span>
    </section>
    <section className='w-full h-lvh p-28 flex justify-between items-center'>
      <div className='w-1/4 mx-3'>
        <img src={color1} alt="color1" className='rounded-full'/>
        <p className='text-center m-2'>Passionate red</p>
      </div>
      <div className='w-1/4 mx-3'>
        <img src={color2} alt="color1" className='rounded-full'/>
        <p className='text-center m-2'>Lime green</p>
      </div>
      <div className='w-1/4 mx-3'>
        <img src={color3} alt="color1" className='rounded-full'/>
        <p className='text-center m-2'>Aqua blue</p>
      </div>
      <div className='w-1/4 mx-3'>
        <img src={color4} alt="color1" className='rounded-full'/>
        <p className='text-center m-2'>Midnight blue</p>
      </div>
    </section>
    <Footer/>
    </>
  )
}
