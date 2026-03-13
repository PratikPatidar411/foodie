import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import Logo from './images/Logo.png';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Handle Enter key press in search input
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // If the search query is "pizza", redirect to the pizza section
      if (searchQuery.toLowerCase() === 'pizza') {
        navigate('./Category/pizza'); // Redirect to pizza section
      }
      if (searchQuery.toLowerCase() === 'biryani')
      {
        navigate('./Category/biryani');
      }
           if (searchQuery.toLowerCase() === 'shake' || 'milkshake')
      {
        navigate('./Category/Shake');
      }
      // You can add more conditions here for other searches if needed
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-[#F29F67] fixed w-full z-50 bg-bg-main/90 backdrop-blur-sm border-b border-white/5">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <nav className="flex justify-end items-center">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-20 w-20 mr-12" />
          </Link>
          
          <input
            type="text"
            className="h-[35px] w-[550px] rounded-full mr-[300px] text-[14px] pl-[20px]"
            placeholder="Search for food or restaurants"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query as the user types
            onKeyDown={handleSearch} // Call handleSearch when the user presses a key
          />
          
          <ul className="flex gap-8 items-center">
            <li><a href="/" className="text-text-primary hover:text-accent font-medium transition-colors duration-300">Home</a></li>
            <li><a href="#menu" className="text-text-primary hover:text-accent font-medium transition-colors duration-300">Menu</a></li>
            <li><a href="#profile" className="text-text-primary hover:text-accent font-medium transition-colors duration-300">Profile</a></li>
            <li>
              <a href="#cart" className="flex items-center text-2xl text-accent hover:text-accent-hover transition-colors duration-300">
                <IoCartOutline />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;