import React from 'react';
import Navbar from './components/Navbar';
import VideoSlider from './components/VideoSlider';
import './App.css'; // Import your styles here
import Exhibitions from './components/Exhibitions'
import IndustrialSectorComponent from './components/IndustrialSectorComponent';
import AutomotiveSection from './components/AutomotiveSection';
import CompanyNews from './components/CompanyNews';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <VideoSlider />
      <Exhibitions/>
      <IndustrialSectorComponent/>
      <AutomotiveSection/>
      
      <CompanyNews/>
      <Footer/>
    </div>
  );
};

export default App;
