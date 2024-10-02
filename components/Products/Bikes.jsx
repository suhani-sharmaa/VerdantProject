import { useEffect } from 'react';
import bike from '../../Images/ProductsImages/type1.jpg'
import Footer from '../Footer'
import TemplateProduct from '../TemplateProduct'

export default function Bikes() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  const BikeModels = [
    {
      key: 1,
      name: "Model1",
      imageUrl: `${bike}`,
    },
    {
      key: 2,
      name: "Model2",
      imageUrl: `${bike}`,
    },
    {
      key: 3,
      name: "Model3",
      imageUrl: `${bike}`,
    },
    {
      key: 4,
      name: "Model4",
      imageUrl: `${bike}`,
    },
    {
      key: 5,
      name: "Model5",
      imageUrl: `${bike}`,
    },
    {
      key: 6,
      name: "Model6",
      imageUrl: `${bike}`,
    }
  ];

  return (
    <>
      <div className='h-lvh flex flex-wrap items-end bg-cover' style={{ backgroundImage: `url(${bike})` }}>
        <span className='w-full'>
          <h1 className="font-semibold tracking-widest text-white 
                  text-4xl md:text-9xl m-10 mb-0">Bikes</h1>
          <hr className="w-1/6 m-14 mt-4 bg-green-600 h-1.5 border-none" />
        </span>
      </div>
      <div className="Product-Types flex flex-wrap justify-center">
        {BikeModels.map(Model => (
          <TemplateProduct
            key={Model.key}  // Always provide a unique key when rendering a list
            bgImage={Model.imageUrl}
            Type={Model.name}
            link='details'
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
