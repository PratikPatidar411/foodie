import React from 'react';
import Card from './Card';
import Chocolate from '../images/Chocolateshake.png';
import Strawberry from '../images/Strawberry.png';
import Venilla from '../images/Venilla.png';
import Coffie from '../images/Coffiemilk.png';

function Shake() {
  // Base Functionality of Shake component
  return (
    <div className="w-full  sm:px-8 lg:px-16">
      
      <div className="w-full h-[30px] bg-white sm:mb-12">
        <p className="font-bold text-[20px] sm:text-[25px] text-gray-800 text-start">
          Shake it up with our creamy delights!
        </p>
      </div>

      <div className="flex flex-wrap gap-12">
        <Card imgurl={Chocolate} name="Chocolate Shake" rs="100" p="veg" />
        <Card imgurl={Strawberry} name="Strawberry Milkshake" rs="134" p="veg" />
        <Card imgurl={Venilla} name="Vanilla Bean Milkshake" rs="153" p="veg" />
        <Card imgurl={Coffie} name="Caramel Coffee Milkshake" rs="356" p="veg" />
      </div>
    </div>
  );
}

export default Shake;