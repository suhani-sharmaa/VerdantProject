import start from '../Images/ProductsImages/Bg1.webp';
import TemplateProduct from './TemplateProduct';
import type1 from '../Images/ProductsImages/type1.jpg';
import type2 from '../Images/ProductsImages/type2.jpg';
import type3 from '../Images/ProductsImages/type3.jpg';
import type4 from '../Images/ProductsImages/type4.jpg';
import type5 from '../Images/ProductsImages/type5.jpg';
import { useEffect, useState } from 'react';
const discriptionData =[
  {evCars:'Discover the future of driving with our electric cars. Offering zero emissions, lower running costs, and cutting-edge technology, these EVs provide an eco-friendly yet powerful driving experience. Perfect for those looking to reduce their carbon footprint without compromising on performance.'},

  {evTractors:'Revolutionize your farming with our electric tractors. Designed for efficiency and sustainability, these EV tractors offer robust performance with lower maintenance and fuel costs, all while reducing emissions. Ideal for modern, eco-conscious agriculture.'},

  {evBuses:'Upgrade your fleet with our electric buses. Offering zero emissions, quiet operation, and lower running costs, these EV buses are perfect for cities and businesses looking to promote sustainable and cost-efficient public transportation solutions.'},

  {evTrucks:'Power up your logistics with our electric trucks. Engineered for long-haul performance and sustainability, these EV trucks provide lower fuel costs, reduced emissions, and superior efficiency, making them the ideal solution for modern transportation needs.'},

  {evAmbulance:'Experience the next generation of emergency response with our electric ambulances. These eco-friendly, zero-emission vehicles provide rapid, reliable transport while reducing operational costs and environmental impact. Built with advanced medical technology, our EV ambulances deliver sustainability and performance when it matters most.'},
  
]
export default function Product({initial = 0}) {
  const[count,setCount] = useState(initial);
  useEffect(()=>{
    window.scrollTo(0, 0);
    document.title = 'Products-Verdant'
    if(count<=60) {
      setTimeout(() => {
        setCount(count + 1);
      }, 15);  
    }
  },[count])
  return (
    <>
      <div className="flex flex-wrap items-center justify-center font-Ankori">
        <img src={start} className="w-svw md:h-lvh h-80 -z-10 brightness-50" />
        <div className="absolute md:h-1/2 h-1/5 w-1/5 mx-20 text-white text-center md:right-2/3 right-48">
          <h1 className="md:text-8xl text-4xl font-thin md:m-12 m-2">
            {count<=50?count:50}
          </h1>
          <p className="animate-pulse md:text-3xl text-xl">Billion Yuan Assets</p>
        </div>
        <div className="absolute w-px md:h-1/3 h-1/5 bg-white opacity-30 left-1/3"></div>
        <div className="absolute w-1/5 h-1/5 md:h-1/2 text-white text-center">
          <h1 className="md:text-8xl text-4xl font-extralight md:m-12 m-2">
          {count<=60?count:'60+'}
          </h1>
          <p className="animate-pulse md:text-3xl text-xl">Exported countries</p>
        </div>
        <div className="absolute w-px md:h-1/3 h-1/5 bg-white opacity-30 right-1/3"></div>
        <div className="absolute w-1/5 h-1/5 md:h-1/2 mx-20 text-white text-center md:left-2/3 left-48">
          <h1 className="md:text-8xl text-4xl font-extralight md:m-12 m-2">
            {count<=5?count:5}
          </h1>
          <p className="animate-pulse md:text-3xl text-xl">Major industrial sectors</p>
        </div>
      </div>

      <div className="Product-Types flex flex-wrap justify-center">
        <TemplateProduct key={3} bgImage={type3} Type={'Cars'} link='cars' discription={discriptionData[0].evCars}/>
        <TemplateProduct key={2} bgImage={type2} Type={'Ambulance'} link='ambulances' discription={discriptionData[4].evAmbulance}/>
        <TemplateProduct key={1} bgImage={type1} Type={'Tractor'} link='tractors' discription={discriptionData[1].evTractors}/>
        <TemplateProduct key={4} bgImage={type4} Type={'Buses'} link='buses' discription={discriptionData[2].evBuses}/>
        <TemplateProduct key={5} bgImage={type5} Type={'Trucks'} link='trucks' discription={discriptionData[3].evTrucks}/>
      </div>
    </>
  );
}
