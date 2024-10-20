import TemplateProduct from "./TemplateProduct";
import noProduct from '../Images/ProductsImages/noProduct.png'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from './Loader';
import axios from "axios";
const url = import.meta.env.VITE_BACKEND_URL;
export default function ProductType() {
  const[models , setModels] = useState([]);
  const[loading ,setLoading] = useState(true);
  const { cId } = useParams();
  const checkImageUrl = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      
      img.onload = () => resolve(true); // Image loaded successfully
      img.onerror = () => resolve(false); // Image failed to load
      
      img.src = url; // Set the source of the image
    });
  };
  const getModels = async () => {
    try {
      const { data } = await axios.get(`${url}/api/category/${cId}`);
      setModels(data);
      const res =await checkImageUrl(data.image);
      if(!res) {
        setModels({
          ...data,
          image:noProduct
        })
      }
    } catch (err) {
      console.log(err);
      alert("Some Error Occurred");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
      window.scrollTo(0 , 0);
    setLoading(true);
    getModels();
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  
  }, [cId]);
  const{image , name ,subcategories} = models;
  return (
    <>
    <div className='h-lvh flex flex-wrap items-end bg-cover font-Ankori' style={{ backgroundImage: `url(${image})`}}>
      <span className='w-full'>
      <h1 className="font-Ankori tracking-widest text-white 
                text-4xl md:text-9xl m-10 mb-0"
              >{`${name}`.toUpperCase()}</h1>
        <hr className="w-1/12 m-14 mt-4 bg-green-600 h-1.5 border-none"/>
          </span>
        </div>
        <div className="Product-Types flex flex-wrap justify-center">
        {loading && <Loader/>}
        {!loading && subcategories.length === 0 && (
  <strong className="text-3xl font-semibold my-5">
    No Products Available
  </strong>
)}
        {!loading && subcategories.map((Model , index)=>{
          return(
            <TemplateProduct
            key={index}
            bgImage={Model.image}
            Type={Model.name}
            discription={Model.description}
            link={`${cId}/${Model._id}`}
          />
          )
        })}
    </div>
  </>
  )
}
