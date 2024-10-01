import start from '../Images/ProductsImages/Bg1.webp';
import Footer from './Footer';
import TemplateProduct from './TemplateProduct';
import type1 from '../Images/ProductsImages/type1.jpg';
import type2 from '../Images/ProductsImages/type2.jpg';
import type3 from '../Images/ProductsImages/type3.jpg';
import type4 from '../Images/ProductsImages/type4.jpg';
import type5 from '../Images/ProductsImages/type5.jpg';
import { useEffect, useState } from 'react';
// import { useEffect} from 'react';
export default function Product({initial = 0}) {
  const[count,setCount] = useState(initial);
  useEffect(()=>{
    document.title = 'Products-Verdant'
    if(count<=60) {
      setTimeout(() => {
        setCount(count + 1);
      }, 15);  
    }
  },[count])
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <img src={start} className="w-svw md:h-lvh h-80 -z-10 brightness-50" />
        <div className="absolute md:h-1/2 h-1/5 w-1/5 mx-20 text-white text-center md:right-2/3 right-48">
          <h1 className="md:text-8xl text-4xl font-extralight md:m-12 m-2">
            {count<=50?count:50}
          </h1>
          <p className="animate-pulse md:text-3xl text-xl">Billion Yuan Assets</p>
        </div>
        <div className="absolute w-px md:h-1/3 h-1/5 bg-white opacity-30 left-1/3"></div>
        <div className="absolute w-1/5 h-1/5 md:h-1/2 text-white text-center">
          <h1 className="md:text-8xl text-4xl font-extralight md:m-12 m-2">
          {count<=60?count:'60+'}
          </h1>
          <p className="animate-pulse md:text-3xl text-xl">Exported countries</p>
        </div>
        <div className="absolute w-px md:h-1/3 h-1/5 bg-white opacity-30 right-1/3"></div>
        <div className="absolute w-1/5 h-1/5 md:h-1/2 mx-20 text-white text-center md:left-2/3 left-48">
          <h1 className="md:text-8xl text-4xl font-extralight md:m-12 m-2">
            {count<=5?count:5}
          </h1>
          <p className="animate-pulse md:text-3xl text-xl">Major industrial sectors</p>
        </div>
      </div>

      <div className="Product-Types flex flex-wrap justify-center">
        <TemplateProduct bgImage={type1} Type={'Bikes'} link={'bikes'}/>
        <TemplateProduct bgImage={type2} Type={'Scooters'} link={'scooters'}/>
        <TemplateProduct bgImage={type3} Type={'Cars'} link={'cars'}/>
        <TemplateProduct bgImage={type4} Type={'Buses'} link={'buses'}/>
        <TemplateProduct bgImage={type5} Type={'Trucks'} link={'truckes'}/>
      </div>
      <Footer />
    </>
  );
}
