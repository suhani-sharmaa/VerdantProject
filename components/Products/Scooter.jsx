import Footer from "../Footer";
import TemplateProduct from "../TemplateProduct";
import scooter from '../../Images/ProductsImages/type2.jpg'
import { useEffect } from "react";
export default function Scooter() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  const scooterModels = [
    {
      key: 1,
      name: "Model1",
      imageUrl: `${scooter}`,
    },
    {
      key: 2,
      name: "Model2",
      imageUrl: `${scooter}`,
    },
    {
      key: 3,
      name: "Model3",
      imageUrl: `${scooter}`,
    },
    {
      key: 4,
      name: "Model4",
      imageUrl: `${scooter}`,
    },
    {
      key: 5,
      name: "Model5",
      imageUrl: `${scooter}`,
    },
    {
      key: 6,
      name: "Model6",
      imageUrl: `${scooter}`,
    }
  ];
  return (
    <>
      <div className='h-lvh flex flex-wrap items-end bg-cover' style={{ backgroundImage: `url(${scooter})`}}>
        <span className='w-full'>
        <h1 className="font-semibold tracking-widest text-white 
                  text-4xl md:text-9xl m-10 mb-0"
                >Scooters</h1>
          <hr className="w-1/6 m-14 mt-4 bg-green-600 h-1.5 border-none"/>
            </span>
          </div>
          <div className="Product-Types flex flex-wrap justify-center">
          {scooterModels.map(Model => (
          <TemplateProduct
            key={Model.key}  // Always provide a unique key when rendering a list
            bgImage={Model.imageUrl}
            Type={Model.name}
            link='details'
          />
        ))}
      </div>
    <Footer/>
    </>
  )
}
