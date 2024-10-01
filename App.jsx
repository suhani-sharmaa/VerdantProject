/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import './App.css'; // Import your styles here
import Aboutus from './components/Aboutus'
import { BrowserRouter as
  Router,
  Routes,
  Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Bikes from './components/Products/Bikes';
import Scooter from './components/Products/Scooter';
import Cars from './components/Products/Cars';
import Buses from './components/Products/Buses';
import Truck from './components/Products/Truck';
const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Aboutus" Component={Aboutus}/>
        <Route path="/products" Component={Product}/>
        <Route path="/products/bikes" Component={Bikes}/>
        <Route path="/products/scooters" Component={Scooter}/>
        <Route path="/products/cars" Component={Cars}/>
        <Route path="/products/buses" Component={Buses}/>
        <Route path="/products/trucks" Component={Truck}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;
