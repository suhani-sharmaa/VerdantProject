import { useEffect, Suspense, lazy } from "react";

// Lazy load components
const VideoSlider = lazy(() => import("./VideoSlider"));
const Exhibitions = lazy(() => import("./Exhibitions"));
const IndustrialSector = lazy(() => import("./IndustrialSectorComponent"));
const CompanyNews = lazy(() => import("./CompanyNews"));

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home-Verdant";
  }, []);

  return (
    <div className="App font-Ankori">
      {/* Suspense for lazy-loaded components */}
      <Suspense fallback={<div>Loading Video Slider...</div>}>
        <VideoSlider />
      </Suspense>

      <Suspense fallback={<div>Loading Exhibitions...</div>}>
        <Exhibitions />
      </Suspense>

      <Suspense fallback={<div>Loading Industrial Sector...</div>}>
        <IndustrialSector />
      </Suspense>

      <Suspense fallback={<div>Loading Company News...</div>}>
        <CompanyNews />
      </Suspense>
    </div>
  );
}
