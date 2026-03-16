import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoTrashOutline, IoArrowBackOutline } from 'react-icons/io5';

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  const navigate = useNavigate();
  const items = cartItems || [];

  const totalItemsCount = items.reduce((total, item) => total + (item.quantity || 1), 0);
  const totalPrice = items.reduce((total, item) => total + (parseInt(item.price) * (item.quantity || 1)), 0);

  const [showCheckout, setShowCheckout] = useState(false);
  
  const [address, setAddress] = useState(() => {
    const savedAddress = localStorage.getItem('userAddress');
    return savedAddress ? JSON.parse(savedAddress) : { name: '', phone: '', street: '', pincode: '' };
  });

  const handleInputChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!address.name || !address.phone || !address.street || !address.pincode) {
      alert("Please fill all the delivery details!");
      return;
    }
    
    localStorage.setItem('userAddress', JSON.stringify(address));
    navigate('/payment');
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-orange-950 border-b-2 border-orange-200 pb-4">
        {showCheckout ? 'Checkout Details' : 'Your Shopping Cart'}
      </h2>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16">
          <p className="text-2xl text-gray-500 font-semibold mb-4">Cart is empty! 🍕</p>
          <Link to="/" className="bg-[#F29F67] text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600">
            Go back to Menu
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1 space-y-4">
            {!showCheckout ? (
              // CART ITEMS LIST
              items.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                  <div className="flex items-center gap-4 w-1/2">
                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg border border-gray-200" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-orange-50 px-3 py-1 rounded-lg border border-orange-200">
                    <button onClick={() => updateQuantity(item.name, 'decrease')} className="text-orange-900 font-bold text-xl px-2 hover:text-red-600">-</button>
                    <span className="font-bold text-gray-800">{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item.name, 'increase')} className="text-orange-900 font-bold text-xl px-2 hover:text-green-600">+</button>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-xl font-bold text-orange-950 w-20 text-right">
                      ₹{parseInt(item.price) * (item.quantity || 1)}
                    </div>
                    <button onClick={() => removeFromCart(item.name)} className="text-red-500 hover:text-red-700 text-2xl bg-red-50 p-2 rounded-full transition-colors">
                      <IoTrashOutline />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              // ADDRESS FORM
              <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                <div className="flex items-center gap-4 mb-6">
                  <button onClick={() => setShowCheckout(false)} className="text-2xl text-orange-950 hover:text-orange-600 transition-colors p-2 bg-orange-50 rounded-full"><IoArrowBackOutline /></button>
                  <h3 className="text-2xl font-bold text-gray-800">Delivery Address</h3>
                </div>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-gray-600 font-semibold mb-1">Full Name</label>
                      <input type="text" name="name" value={address.name} onChange={handleInputChange} placeholder="e.g. Bhupendra Yadav" className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-600 font-semibold mb-1">Phone Number</label>
                      <input type="tel" name="phone" value={address.phone} onChange={handleInputChange} placeholder="10-digit number" className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-gray-600 font-semibold mb-1">Complete Address</label>
                    <textarea name="street" value={address.street} onChange={handleInputChange} placeholder="House No, Building, Street, Area" rows="3" className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                  </div>
                  
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-gray-600 font-semibold mb-1">Pincode</label>
                    <input type="text" name="pincode" value={address.pincode} onChange={handleInputChange} placeholder="e.g. 452001" className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[350px] bg-orange-50 p-6 rounded-xl shadow-sm h-fit border border-orange-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b border-orange-200 pb-2">Order Summary</h3>
            
            <div className="flex justify-between mb-3 text-gray-700 font-medium">
              <span>Total Items</span>
              <span>{totalItemsCount}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-700 font-medium">
              <span>Delivery Charges</span>
              <span className="text-green-600 font-bold">FREE</span>
            </div>
            
            <div className="flex justify-between text-2xl font-black border-t border-orange-200 pt-4 text-orange-950 mt-2">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>

            {!showCheckout ? (
              <button onClick={() => setShowCheckout(true)} className="w-full mt-6 bg-[#431407] text-white py-3 rounded-lg font-bold hover:bg-[#2b0c04] transition duration-300 shadow-md">
                Proceed to Checkout
              </button>
            ) : (
              <button onClick={handlePlaceOrder} className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition duration-300 shadow-md">
                Proceed to Payment
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;