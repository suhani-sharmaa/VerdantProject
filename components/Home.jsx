import { useEffect } from "react";
import AutomotiveSection from "./AutomotiveSection";
import CompanyNews from "./CompanyNews";
import Exhibitions from "./Exhibitions";
import IndustrialSector from "./IndustrialSectorComponent";
import VideoSlider from "./VideoSlider";
import Footer from "./Footer";

export default function Home() {
  useEffect(()=>{
    document.title = "Home-Verdant"
  })
  return (
          <div className="App">
          <VideoSlider/>
          <Exhibitions/>
          <IndustrialSector/>
          <AutomotiveSection/>
          <CompanyNews/>
          <Footer/> 
        </div>
  )
}
