import TemplateProduct from "./TemplateProduct";
import Tractor from '../Images/ProductsImages/type1.jpg'
import Ambulance from '../Images/ProductsImages/type2.jpg'
import Car from '../Images/ProductsImages/type3.jpg'
import Bus from '../Images/ProductsImages/type4.jpg'
import Truck from '../Images/ProductsImages/type5.jpg'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from './Loader';
const ImgData = {
  tractors:  Tractor ,
  ambulances: Ambulance ,
  cars: Car,
  buses: Bus,
  trucks: Truck
};
const url = import.meta.env.VITE_BACKEND_URL;
export default function ProductType() {
  const[models , setModels] = useState([]);
  const[loading ,setLoading] = useState(true);
  const { type } = useParams();
  const imgUrl = ImgData[type];
  const getModels = async()=>{
 try{
  let data = await fetch(`${url}/api/category/${type.charAt(0).toUpperCase() + type.slice(1)}`);
      data  = await data.json();
      setModels(data);
    }catch(err) {
      console.log(err);
      alert("Some Error Accured");
    }finally{
      setLoading(false);
    }
    }
  useEffect(()=>{
    window.scrollTo(0, 0);
    if(models.length == 0) {
      getModels();
    }
  })
  return (
    <>
    <div className='h-lvh flex flex-wrap items-end bg-cover font-Ankori' style={{ backgroundImage: `url(${imgUrl})`}}>
      <span className='w-full'>
      <h1 className="font-Ankori tracking-widest text-white 
                text-4xl md:text-9xl m-10 mb-0"
              >{type.toUpperCase()}</h1>
        <hr className="w-1/12 m-14 mt-4 bg-green-600 h-1.5 border-none"/>
          </span>
        </div>
        <div className="Product-Types flex flex-wrap justify-center">
        {loading && <Loader/>}
        {!loading && models.length == 0 && <p className='w-full text-center text-3xl'>No Products Available</p>}
        {models.map((Model , index)=>{
          return(
            <TemplateProduct
            key={index}
            bgImage={imgUrl}
            Type={Model.name}
            link={`${type}/${Model.name}`}
          />
          )
        })}
    </div>
  </>
  )
}
