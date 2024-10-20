import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LuLoader2 } from "react-icons/lu";
import axios from 'axios';
import ManageProduct from './ManageProduct';
const Admin = () => {
 const [adminDetails, setAdminDetails] = useState({
  name: '',
  email: ''
 });
 const[content , setcontent] = useState('products');
 const[loading ,isLoading] = useState(true);
 const navigate = useNavigate();
 const url = import.meta.env.VITE_BACKEND_URL;

 //function to get the admin data from db
 const getAdmin = async () => {
  isLoading(true);
  try {
   const {data} = await axios.get(`${url}/auth/admin`, {
    withCredentials: true // This is essential for cookies
});
   setAdminDetails({
    name: data.name,
    email: data.email
   })
  } catch (err) {
   console.log(err);
   navigate('/adminLogin');
  }finally{
    isLoading(false);
  }
 }
 const {pathname} = useLocation();
 useEffect(() => {
  if(adminDetails.name === ''&&
    adminDetails.email === ''
  ) {
    getAdmin();
  }
  if(pathname === "/admin/products") {
    setcontent('products');
  }else if(pathname === "/admin/news") {
    setcontent('news');
  }
 });

 return (
  <div className="min-h-screen bg-gradient-to-r from-green-400 to-green-600 flex flex-col justify-center items-center p-8">
   {/* Admin Details Section */}
   <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl my-8 mt-12">
    <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center">Admin Information</h2>
    <div className="flex items-center justify-between">
     <div className="flex justify-evenly w-full">
      <h3 className="w-fit text-xl font-bold flex items-center">Name : {!loading ? adminDetails.name : <LuLoader2 className='animate-spin items-center mx-4'/>}</h3>
      <p className="w-fit text-xl font-bold flex items-center">Email : {!loading ? adminDetails.email : <LuLoader2 className='animate-spin mx-4'/>}</p>
     </div>
    </div>
   </div>
   <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl min-h-dvh">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 flex justify-left">
      <Link to={'/admin/products'} className={`rounded-xl bg-opacity-30 ${content === "products"?'bg-gray-400':''} p-2 mx-4 mb-1`}>Manage Products</Link>
      <Link to={'/admin/news'} className={`rounded-xl bg-opacity-30 ${content === "news"?'bg-gray-400':''} p-2 mx-4 mb-1`}>Manage News</Link>
    </h2>
    {content === 'products'?<ManageProduct/>:"No News Available"}
   </div>
  </div>
 );
};

export default Admin;
