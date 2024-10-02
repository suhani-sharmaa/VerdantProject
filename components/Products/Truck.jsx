import Footer from "../Footer";
import TemplateProduct from "../TemplateProduct";
import truck from '../../Images/ProductsImages/type5.jpg'
import { useEffect } from "react";
export default function Truck() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  const truckModels = [
    {
      key: 1,
      name: "Model1",
      imageUrl: `${truck}`,
    },
    {
      key: 2,
      name: "Model2",
      imageUrl: `${truck}`,
    },
    {
      key: 3,
      name: "Model3",
      imageUrl: `${truck}`,
    },
    {
      key: 4,
      name: "Model4",
      imageUrl: `${truck}`,
    },
    {
      key: 5,
      name: "Model5",
      imageUrl: `${truck}`,
    },
    {
      key: 6,
      name: "Model6",
      imageUrl: `${truck}`,
    }
  ];
  return (
    <>
      <div className='h-lvh flex flex-wrap items-end bg-cover' style={{ backgroundImage: `url(${truck})`}}>
        <span className='w-full'>
        <h1 className="font-semibold tracking-widest text-white 
                  text-4xl md:text-9xl m-10 mb-0"
                >Trucks</h1>
          <hr className="w-1/6 m-14 mt-4 bg-green-600 h-1.5 border-none"/>
            </span>
          </div>
          <div className="Product-Types flex flex-wrap justify-center">
          {truckModels.map(Model => (
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
