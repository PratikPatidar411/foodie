import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/Login';
import Cart from './components/cart';
import Payment from './components/payment';
import Orders from './components/orders'; // Orders component import kiya

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import category components
import Pizza from './components/componentsexplore/Pizza';
import Biryani from './components/componentsexplore/biryani';
import Shake from './components/componentsexplore/shake';
import PureVeg from './components/componentsexplore/pureVeg';
import Paratha from './components/componentsexplore/paratha';
import Chinese from './components/componentsexplore/chinese';

function App() {
  // 1. Cart ka State (LocalStorage ke sath)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('bhojanCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. Orders ka State (LocalStorage ke sath)
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('bhojanOrders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Cart update hone pe save karna
  useEffect(() => {
    localStorage.setItem('bhojanCart', JSON.stringify(cart));
  }, [cart]);

  // Orders update hone pe save karna
  useEffect(() => {
    localStorage.setItem('bhojanOrders', JSON.stringify(orders));
  }, [orders]);

  // Cart Functions
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productName, action) => {
    setCart((prevCart) => prevCart.map((item) => {
      if (item.name === productName) {
        if (action === 'increase') return { ...item, quantity: (item.quantity || 1) + 1 };
        else if (action === 'decrease' && item.quantity > 1) return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Order Add karne ka function
  const placeNewOrder = (orderData) => {
    setOrders([orderData, ...orders]); // Naye order ko list mein sabse upar daalo
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <Header cartItems={cart} />

        <div className="flex-grow">
          <div className="container mx-auto pl-28 md:pl-4 py-12">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home addToCart={addToCart} />} />
              <Route path="/login" element={<Login />} />

              {/* Cart Route */}
              <Route path="/cart" element={
                <Cart
                  cartItems={cart}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              } />

              {/* Payment Route */}
              <Route path="/payment" element={
                <Payment
                  cartItems={cart}
                  clearCart={clearCart}
                  placeNewOrder={placeNewOrder}
                />
              } />

              {/* Orders Route */}
              <Route path="/orders" element={<Orders ordersList={orders} />} />

              {/* Category routes */}
              <Route path="/category/pizza" element={<Pizza addToCart={addToCart} />} />
              <Route path="/category/biryani" element={<Biryani addToCart={addToCart} />} />
              <Route path="/category/shake" element={<Shake addToCart={addToCart} />} />
              <Route path="/category/pureveg" element={<PureVeg addToCart={addToCart} />} />
              <Route path="/category/paratha" element={<Paratha addToCart={addToCart} />} />
              <Route path="/category/chinese" element={<Chinese addToCart={addToCart} />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;