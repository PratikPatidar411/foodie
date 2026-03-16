import React, { useState } from 'react';
import { IoCartOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Logo from './images/Logo.png'; 
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartItems }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const cartCount = cartItems ? cartItems.reduce((total, item) => total + (item.quantity || 1), 0) : 0;

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = searchQuery.toLowerCase();
      if (query === 'pizza') navigate('/category/pizza');
      else if (query === 'biryani') navigate('/category/biryani');
      else if (query === 'shake' || query === 'milkshake') navigate('/category/shake');
      setIsMenuOpen(false); 
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F29F67] py-3 shadow-md">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex-shrink-0">
            <img src={Logo} alt="Bhojan logo" className="h-12 w-12 md:h-16 md:w-16 object-contain" />
          </Link>

          <div className="hidden md:block flex-1 max-w-[600px] mx-8">
            <input
              type="text"
              className="w-full h-[40px] rounded-full text-[14px] px-6 outline-none focus:ring-2 focus:ring-orange-900 shadow-sm"
              placeholder="Search for food or restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>

          <ul className="hidden md:flex gap-8 items-center">
            <li><Link to="/" className="text-gray-900 hover:text-white font-semibold transition-colors">Home</Link></li>
            
            {/* Yahan Menu ko hata kar Orders lagaya hai */}
            <li><Link to="/orders" className="text-gray-900 hover:text-white font-semibold transition-colors">Orders</Link></li>
            
            <li><a href="#profile" className="text-gray-900 hover:text-white font-semibold transition-colors">Profile</a></li>
            <li>
              <Link to="/cart" className="relative flex items-center text-3xl text-gray-900 hover:text-white transition-colors">
                <IoCartOutline />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#F29F67]">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <div className="flex md:hidden items-center gap-4">
            <Link to="/cart" className="relative text-3xl text-gray-900">
              <IoCartOutline />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full border border-[#F29F67]">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="text-3xl text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col gap-4 pb-2 text-center bg-white/20 rounded-lg p-4 pr-12">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-900 hover:text-white font-semibold">Home</Link></li>
            <li><Link to="/orders" onClick={() => setIsMenuOpen(false)} className="block text-gray-900 hover:text-white font-semibold">Orders</Link></li>
            <li><a href="#profile" onClick={() => setIsMenuOpen(false)} className="block text-gray-900 hover:text-white font-semibold">Profile</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;