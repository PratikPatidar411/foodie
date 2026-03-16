import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkCircleOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';

function Payment({ cartItems, clearCart, placeNewOrder }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsProcessing(true); // Loading start

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true); // Loading end, success dikhao

      // 1. Naye order ka data ready karo
      const newOrder = {
        id: "ORD" + Math.floor(Math.random() * 1000000), // Random Order ID
        items: cartItems || [], // Cart mein jo tha
        date: new Date().toLocaleString(), // Aaj ki Date aur Time
        status: "Preparing", 
        totalAmount: (cartItems || []).reduce((total, item) => total + (parseInt(item.price) * (item.quantity || 1)), 0)
      };

      // 2. Order App.js ke state mein save karo
      placeNewOrder(newOrder);

      // 3. Payment done, isliye Cart empty karo
      clearCart();

    }, 2000); // 2 second ka fake loading
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md text-center">

        {isSuccess ? (
          <div className="flex flex-col items-center">
            <IoCheckmarkCircleOutline className="text-7xl text-green-500 mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
            <p className="text-gray-500 mb-8">Your order has been placed and is being prepared. Thank you for choosing Bhojan!</p>

            <button
              onClick={() => navigate('/')}
              className="w-full bg-[#431407] text-white py-3 rounded-xl font-bold hover:bg-[#2b0c04] transition duration-300 shadow-md"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-center mb-4">
              <IoShieldCheckmarkOutline className="text-5xl text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Secure Checkout</h2>
            <p className="text-gray-500 mb-8">Choose a payment method to complete your order.</p>

            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center p-4 border-2 border-green-500 bg-green-50 rounded-lg cursor-pointer">
                <input type="radio" checked readOnly className="mr-3 w-5 h-5 accent-green-600" />
                <span className="font-semibold text-gray-800">UPI / QR</span>
              </div>
              <div className="flex items-center p-4 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
                <input type="radio" disabled className="mr-3 w-5 h-5" />
                <span className="font-semibold text-gray-800">Credit/Debit Card</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-md flex justify-center items-center ${
                isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Pay Now securely'
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Payment;