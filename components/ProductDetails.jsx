import tractor from '../Images/ProductsImages/type1.jpg'
import ambulance from '../Images/ProductsImages/type2.jpg'
import car from '../Images/ProductsImages/type3.jpg'
import bus from '../Images/ProductsImages/type4.jpg'
import truck from '../Images/ProductsImages/type5.jpg'
import Contactusform from './Contactusform'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const url = import.meta.env.VITE_BACKEND_URL;
const imgData ={
  tractors:tractor,
  ambulances:ambulance,
  cars:car,
  buses:bus,
  trucks:truck,
}
const ProductDetails = () => {
  const { model,type } = useParams();
  const [product,setProduct] = useState({
    name: '',
    image:imgData[type],
    price: '$299.99',
    rating: 4.5,
    description:'',
    features: [
      'High durability',
      'Lightweight',
      'Eco-friendly materials',
      'Affordable price',
    ],
  });
  const getProduct=async()=>{
 try{
   const responce = await axios.get(`${url}/api/subCategory/${model}`);
    const data = await responce.data;
    setProduct({
      ...product,
      name:data.name,
      description:data.description,
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
  return (
    <>
        <div className='h-lvh flex flex-wrap items-end bg-cover font-Ankori' style={{ backgroundImage: `url(${product.image})`}}>
      <span className='w-full'>
      <h1 className="font-Ankori tracking-widest text-white 
                text-4xl md:text-9xl m-10 mb-0"
              >{model.toUpperCase()}</h1>
        <hr className="w-1/12 m-14 mt-4 bg-green-600 h-1.5 border-none"/>
          </span>
        </div>
      {/* Product Details Section */}
      <div className="p-8">
        {/* Product Name and Price */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-gray-800">{product.name?product.name:'loading...'}</h1>
          <span className="text-3xl font-semibold text-green-600">{product.price}</span>
        </div>

        {/* Product Description */}
        <p className="text-lg text-gray-600 mb-6">{product.description?product.description:'loading...'}</p>

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
