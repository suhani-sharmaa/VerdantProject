import start from '../Images/ProductsImages/Bg1.webp';
import TemplateProduct from './TemplateProduct';
import type1 from '../Images/ProductsImages/type1.jpg';
import type2 from '../Images/ProductsImages/type2.jpg';
import type3 from '../Images/ProductsImages/type3.jpg';
import type4 from '../Images/ProductsImages/type4.jpg';
import type5 from '../Images/ProductsImages/type5.jpg';
import { useEffect, useState } from 'react';
const url = "http://localhost:4321/api/category";
export default function Product({initial = 0}) {
  const[dataTypes , setDataTypes] = useState([]);
  const imgUrl = {
    Trucks:type5,
    Tractors:type1,
    Ambulance:type2,
    Buses:type4,
    Cars:type3,
  };
const getCategories = async()=>{
  const data = await fetch(url);
  const res = await data.json();
  setDataTypes(res);
}
  const[count,setCount] = useState(initial);
  useEffect(()=>{
    window.scrollTo(0, 0);
    document.title = 'Products-Verdant'
    if(count<=60) {
      setTimeout(() => {
        setCount(count + 1);
      }, 10);
      return; 
    }
    getCategories();
  },[count])
  return (
    <>
      <div className="flex flex-wrap items-center justify-center font-Ankori">
        <img src={start} className="w-svw md:h-lvh h-80 -z-10 brightness-50" />
        <div className="absolute md:h-1/2 h-1/5 w-1/5 mx-20 text-white text-center md:right-2/3 right-48">
          <h1 className="md:text-8xl text-4xl font-thin md:m-12 m-2">
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
      <div className="Product-Types h-fit flex flex-wrap justify-center">
        {dataTypes.map((cat,index)=>{
          return(
            <TemplateProduct key={index} bgImage={imgUrl[cat.name]}Type={cat.name} link= {cat.name.toLowerCase()} discription={cat.description}/>
          )
        })}
      </div> 
    </>
  );
}
