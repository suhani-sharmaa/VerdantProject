import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import './App.css'; // Import your styles here
import Aboutus from './components/Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import News from './components/News';
import ProductType from './components/ProductType';
import Contactuspage from './components/Contactuspage';
import Customization from './components/Customization';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Admin from './components/Admin';
import LoginAdmin from './components/LoginAdmin';
import Loader from './components/Loader';

// Lazy load Home component
const Home = React.lazy(() => import('./components/Home'));

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/products" element={<Admin/>} />
            <Route path="/admin/news" element={<Admin/>} />
            <Route path="/adminLogin" element={<LoginAdmin />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/products" element={<Product />} />
            <Route path="/news" element={<News />} />
            <Route path="/contactus" element={<Contactuspage />} />
            <Route path="/customization" element={<Customization />} />
            <Route path="/products/:cId" element={<ProductType />} />
            <Route path="/products/:cId/:mId" element={<ProductDetails/>} />
            <Route path="/:any" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

export default App;
