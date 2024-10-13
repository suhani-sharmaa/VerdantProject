import { useEffect } from "react";
import Contactusform from "./Contactusform";

export default function Contactuspage() {
  useEffect(()=>{
    window.scrollTo(0,0);
    document.title = "Contact-Us"
})
  return (
    <>
<section className="contact-header font-Ankori">
<div className="h-80 bg-gray-900 w-full flex justify-center items-center bg-gray-900">
          <h1 className='md:text-6xl text-5xl font-Ankori font-bold text-white w-fit'>Contact-Us</h1>
        </div>
</section>
<Contactusform Title = {'Business Inquiry'}
Position={'center'}/>
<hr className="mt-32"/>
<div className="w-full mt-20 h-48 text-center text-green-700">
          <h1 className="text-5xl m-3 font-extrabold">@verdant-international</h1>
          <p className="text-xl m-4">Follow us for up-to-date news!</p>
</div>
<div>

</div>
    </>
  )
}
