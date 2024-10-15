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
import News from './components/News';
import ProductType from './components/ProductType'
import Contactuspage from './components/Contactuspage';
import Customization from './components/Customization';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Admin from './components/Admin';
import LoginAdmin from './components/LoginAdmin';
const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/admin" Component={Admin}/>
        <Route path="/adminLogin" Component={LoginAdmin}/>
        <Route path="/Aboutus" Component={Aboutus}/>
        <Route path="/products" Component={Product}/>
        <Route path="/news" Component={News}/>
        <Route path="/contactus" Component={Contactuspage}/>
        <Route path="/customization" Component={Customization}/>
        <Route path="/products/:type" Component={ProductType}/>
        <Route path="/products/:type/:model" Component={ProductDetails}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
