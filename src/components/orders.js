import React from 'react';
import { Link } from 'react-router-dom';
import { IoTimeOutline, IoCheckmarkCircleOutline, IoFastFoodOutline } from 'react-icons/io5';

function Orders({ ordersList }) {
  const orders = ordersList || [];

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-orange-950 border-b-2 border-orange-200 pb-4">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16">
          <IoFastFoodOutline className="text-6xl text-gray-300 mb-4" />
          <p className="text-2xl text-gray-500 font-semibold mb-4">You haven't placed any orders yet!</p>
          <Link to="/" className="bg-[#F29F67] text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600">
            Explore Menu
          </Link>
        </div>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {orders.map((order, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 relative overflow-hidden">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b pb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Order ID: {order.id}</h3>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                
                {index === 0 ? (
                  <div className="mt-2 md:mt-0 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 border border-orange-200">
                    <IoTimeOutline className="text-xl animate-spin-slow" />
                    Arriving in 30-45 mins
                  </div>
                ) : (
                  <div className="mt-2 md:mt-0 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 border border-green-200">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Delivered
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-4">
                {order.items && order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="font-bold border border-gray-300 rounded px-2 text-sm bg-gray-50">
                        {item.quantity || 1}x
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-semibold">₹{parseInt(item.price) * (item.quantity || 1)}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-dashed border-gray-300">
                <span className="text-lg font-bold text-gray-600">Total Paid:</span>
                <span className="text-xl font-black text-orange-950">₹{order.totalAmount}</span>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;