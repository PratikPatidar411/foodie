import React from 'react';
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className=" bg-blue-300 fixed w-full z-50 py-5 bg-bg-main/90 backdrop-blur-sm border-b border-white/5">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <nav className="flex justify-end items-center">
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