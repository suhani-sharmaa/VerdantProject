import Contactusform from "./Contactusform";
import Footer from "./Footer";

export default function Contactuspage() {
  return (
    <>
<section className="contact-header">
<div className="hello">
    <div className="subhello">
        <h2>Contact Us</h2>
    </div>
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
<Footer/>
    </>
  )
}
