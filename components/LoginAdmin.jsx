import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { LuLoader2 } from "react-icons/lu";
// import Alert from "./Alert";

export default function LoginAdmin() {
 const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  // const[alert,setAlert] = useState({
  //   type:'',
  //   message:'',
  //   display:''
  // });
  const [loading ,setLoading] = useState(false);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL;
  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async(e) => {
    e.preventDefault();
  try{ 
          setLoading(true);
           const responce = await axios.post(`${url}/auth/login`,{
                    "email":loginData.email,
                    "password":loginData.password
          
    }, {
      withCredentials: true // This is essential for cookies
  });
    // setAlert({
    //   type:"Success",
    //   message:responce.data,
    //   display:'flex',
    // })
    if(responce.status === 200) { 
      navigate('/admin');
    }
  }catch(err){
          console.log(err);
          alert('Unautherised Admin');
  }finally{
          setLoading(false);
          // setAlert({
          //   type:"",
          //   message:"",
          //   display:'',
          // })
  }
}
  return (
    <>
{/* <Alert type={alert.type} message={alert.message} view={alert.display}/> */}
<div className="w-full h-lvh flex justify-center items-center font-Ankor bg-gradient-to-r from-green-400 to-green-600">
<div className="h-fit w-fit flex items-center justify-center">
  <div className="h-full w-full rounded-xl">
    <form
      onSubmit={handleLogin}
      className="flex flex-col hover:blur-0 h-full bg-center bg-cover items-center justify-center w-full gap-5 bg-transparent backdrop-brightness-50 border-black border-2 rounded-xl py-9 px-8"
    >
      <p className="text-2xl font-bold text-white">Admin Login</p>
      <input
        type="email"
        name="email"
        className="bg-white/50 hover:bg-white md:bg-white placeholder:text-violet-500 placeholder:text-sm text-green-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
        placeholder="Enter Your Email Here!"
        value={loginData.email}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        className="bg-white/50 hover:bg-white md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
        placeholder="Enter Your Password Here!"
        value={loginData.password}
        onChange={onChange}
        minLength={8}
        autoComplete=""
      />
      <div className="text-right">
        <a
          href="#"
          className="italic text-white/50 text-sm underline decoration-violet-500 text-violet-500 hover:text-white transition"
        >
          Forgot your Password?
        </a>
      </div>
      <button
        type="submit"
        className={`px-6 py-2 flex items-center bg-violet-500 rounded hover:bg-white hover:text-violet-700 ${loading && 'brightness-50'} font-semibold transition-all text-white`}
      >
        Login{loading?<LuLoader2 className="animate-spin mx-2"/>:''}
      </button>
    </form>
  </div>
</div>
</div>
</>
  )
}
