import React, { useState } from 'react'; // eslint-disable-next-line 
import About from './Components/About';
import Contact from './Components/Contact';
import Homepage from './Components/Homepage';
import Shop from './Components/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Detail from './Components/Detail';
import { CartProvider } from './context/CartContext';
import Cart from './Components/Cart';
function App() {

  return (
  
    <CartProvider>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
