import Contactusform from './Contactusform'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import noProduct from '../Images/ProductsImages/noProduct.png'
import { LuLoader2 } from "react-icons/lu";

import axios from 'axios'
const url = import.meta.env.VITE_BACKEND_URL;
const ProductDetails = () => {
  const { mId } = useParams();
  const [product,setProduct] = useState({
    name: '',
    image:'',
    price: '299999₹',
    rating: 4.5,
    description:'',
    features: [
      'High durability',
      'Lightweight',
      'Eco-friendly materials',
      'Affordable price',
    ],
  });
  const checkImageUrl = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      
      img.onload = () => resolve(true); // Image loaded successfully
      img.onerror = () => resolve(false); // Image failed to load
      
      img.src = url; // Set the source of the image
    });
  };
  const getProduct=async()=>{
 try{
   const { data } = await axios.get(`${url}/api/subCategory/${mId}`);
     setProduct({
      ...product,
      name:data.name,
      description:data.description,
      image:await checkImageUrl(data.image)?data.image:noProduct
    })
  }catch(err) {
    console.log(err);
    alert("Error Loading Product!!");
  }
  }
useEffect(()=>{
  window.scrollTo(0,0);
  if(product.name === '') {
     getProduct();
  }
})
const {name , image , description , price} = product;
  return (
    <>
        <div className='h-lvh flex flex-wrap items-end bg-cover font-Ankori' style={{ backgroundImage: `url(${image})`}}>
        <span className='w-full'>
      <h1 className="font-Ankori tracking-widest text-white 
                text-4xl md:text-7xl m-10 mb-0"
              >{`${name}`.toUpperCase()}</h1>
        <hr className="w-1/12 m-14 mt-4 bg-green-600 h-1.5 border-none"/>
          </span>
        </div>
      {/* Product Details Section */}
      <div className="p-8">
        {/* Product Name and Price */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-gray-800">{!name?<LuLoader2 className='animate-spin'/>:`${name}`.charAt(0).toUpperCase()+`${name}`.slice(1)}</h1>
          <span className="text-3xl font-semibold text-green-600">{price}</span>
        </div>

        {/* Product Description */}
        <p className="text-lg text-gray-600 mb-6">{`${description}`.charAt(0).toUpperCase()+`${description}`.slice(1)}</p>

        {/* Product Features */}
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Features:</h2>
        <ul className="list-disc list-inside text-gray-600">
          {product.features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Contactusform/>
    </>
  );
};

export default ProductDetails;
