import Footer from "../Footer";
import TemplateProduct from "../TemplateProduct";
import bus from '../../Images/ProductsImages/type4.jpg'
import { useEffect } from "react";
export default function Buses() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  const busModels = [
    {
      key: 1,
      name: "Model1",
      imageUrl: `${bus}`,
    },
    {
      key: 2,
      name: "Model2",
      imageUrl: `${bus}`,
    },
    {
      key: 3,
      name: "Model3",
      imageUrl: `${bus}`,
    },
    {
      key: 4,
      name: "Model4",
      imageUrl: `${bus}`,
    },
    {
      key: 5,
      name: "Model5",
      imageUrl: `${bus}`,
    },
    {
      key: 6,
      name: "Model6",
      imageUrl: `${bus}`,
    }
  ];
  return (
    <>
    <div className='h-lvh flex flex-wrap items-end bg-cover' style={{ backgroundImage: `url(${bus})`}}>
      <span className='w-full'>
      <h1 className="font-semibold tracking-widest text-white 
                text-4xl md:text-9xl m-10 mb-0"
              >Buses</h1>
        <hr className="w-1/6 m-14 mt-4 bg-green-600 h-1.5 border-none"/>
          </span>
        </div>
        <div className="Product-Types flex flex-wrap justify-center">
        {busModels.map(Model => (
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
