import { useEffect } from "react";
// import AutomotiveSection from "./AutomotiveSection";
import CompanyNews from "./CompanyNews";
import Exhibitions from "./Exhibitions";
import IndustrialSector from "./IndustrialSectorComponent";
import VideoSlider from "./VideoSlider";

export default function Home() {
  useEffect(()=>{
    window.scrollTo(0,0);
    document.title = "Home-Verdant"
  })
  return (
          <div className="App font-Ankori">
          <VideoSlider/>
          <Exhibitions/>
          <IndustrialSector/>
          {/* <AutomotiveSection/> */}
          <CompanyNews/>
        </div>
  )
}
