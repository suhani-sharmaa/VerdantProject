import TemplateProduct from "./TemplateProduct";
import Tractor from '../Images/ProductsImages/type1.jpg'
import Ambulance from '../Images/ProductsImages/type2.jpg'
import Car from '../Images/ProductsImages/type3.jpg'
import Bus from '../Images/ProductsImages/type4.jpg'
import Truck from '../Images/ProductsImages/type5.jpg'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Models =[
  { name: 'Model_1' },
  { name: 'Model_2' },
  { name: 'Model_3' },
  { name: 'Model_4' },
  { name: 'Model_5' }
]
const ProductData = {
  cars: Models,
  ambulances: Models,
  tractors: Models,
  trucks: Models,
  buses: Models,
};
const ImgData = {
  tractors: { imgUrl: Tractor },
  ambulances: { imgUrl: Ambulance },
  cars: { imgUrl: Car },
  buses: { imgUrl: Bus },
  trucks: { imgUrl: Truck }
};
export default function ProductType() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  const{type} = useParams();
  const product = ProductData[type];
  const productImg = ImgData[type];
  return (
    <>
    <div className='h-lvh flex flex-wrap items-end bg-cover font-Ankori' style={{ backgroundImage: `url(${productImg.imgUrl})`}}>
      <span className='w-full'>
      <h1 className="font-Ankori tracking-widest text-white 
                text-4xl md:text-9xl m-10 mb-0"
              >{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
        <hr className="w-1/12 m-14 mt-4 bg-green-600 h-1.5 border-none"/>
          </span>
        </div>
        <div className="Product-Types flex flex-wrap justify-center">
        {product.map(Model => (
          <TemplateProduct
            key={Model.name}
            bgImage={productImg.imgUrl}
            Type={Model.name}
            link={`${type}/${Model.name}`}
          />
        ))}
    </div>
  </>
  )
}
