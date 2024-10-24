import start from '../Images/ProductsImages/Bg1.webp';
import TemplateProduct from './TemplateProduct';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import axios from 'axios';
// import Alert from './Alert';
const url = import.meta.env.VITE_BACKEND_URL;
export default function Product({initial = 0}) {
  // const[alert,setAlert] = useState({
  //   type:'',
  //   message:'',
  //   display:'none'
  // });
  const[dataTypes , setDataTypes] = useState([]);
  const[loading ,setLoading] = useState(true);
const getCategories = async()=>{
 try {
  const {data} = await axios.get(`${url}/api/category`);
  setDataTypes(data);
}catch(err){
  console.log(err);
  alert(err.message);
    // setAlert({
    //   type:"Error",
    //   message:err.message,
    //   display:'flex',
    // })
}finally{
  setLoading(false);
}
}
  const[count,setCount] = useState(initial);
  useEffect(()=>{
      window.scrollTo(0,0);
    document.title = 'Products-Verdant'
    if(count<=60) {
      setTimeout(() => {
        setCount(count + 1);
      }, 10);
      return; 
    }
    getCategories();
  },[count])
  return (
    <>
      <div className="flex flex-wrap items-center justify-center font-Ankori">
        <img src={start} className="w-svw md:h-lvh h-80 -z-10 brightness-50" />
        <div className="absolute md:h-1/2 h-1/5 w-1/5 mx-20 text-white text-center md:right-2/3 right-48">
          <h1 className="md:text-8xl text-4xl font-thin md:m-12 m-2">
            {count<=50?count:50}
          </h1>
          <p className="animate-pulse md:text-3xl text-xl">11.3 Billion Indian Rupees (INR</p>
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
      <div className="Product-Types h-fit flex flex-wrap justify-center">
      {loading && <Loader/>}
      {!loading && dataTypes.length === 0 && (
  <strong className="text-3xl font-semibold my-5">
    No Products Available
  </strong>
)}
        {dataTypes.map((cat,index)=>{
          return(
            <TemplateProduct key={index}
             bgImage={cat.image}
             Type={cat.name}
             link={cat._id} 
             discription={cat.description}/>
          )
        })}
      </div> 
    </>
  );
}
