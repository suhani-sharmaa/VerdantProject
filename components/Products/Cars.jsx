import Footer from "../Footer";
import TemplateProduct from "../TemplateProduct";
import car from '../../Images/ProductsImages/type3.jpg'
import { useEffect } from "react";
export default function Cars() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  const carModels = [
    {
      key: 1,
      name: "Model1",
      imageUrl: `${car}`,
    },
    {
      key: 2,
      name: "Model2",
      imageUrl: `${car}`,
    },
    {
      key: 3,
      name: "Model3",
      imageUrl: `${car}`,
    },
    {
      key: 4,
      name: "Model4",
      imageUrl: `${car}`,
    },
    {
      key: 5,
      name: "Model5",
      imageUrl: `${car}`,
    },
    {
      key: 6,
      name: "Model6",
      imageUrl: `${car}`,
    }
  ];
  return (
    <>
    <div className='h-lvh flex flex-wrap items-end bg-cover' style={{ backgroundImage: `url(${car})`}}>
      <span className='w-full'>
      <h1 className="font-semibold tracking-widest text-white 
                text-4xl md:text-9xl m-10 mb-0"
              >Cars</h1>
        <hr className="w-1/6 m-14 mt-4 bg-green-600 h-1.5 border-none"/>
          </span>
        </div>
        <div className="Product-Types flex flex-wrap justify-center">
        {carModels.map(Model => (
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
