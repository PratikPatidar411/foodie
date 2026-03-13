import React from 'react';
import Card from './Card'
import Chocolate from '../images/Chocolateshake.png';
import Strawberry from '../images/Strawberry.png';
import Venilla from '../images/Venilla.png';
import Coffie from '../images/Coffiemilk.png';





function Shake() {
  // Base Functionality of Pizza component
  return (
    <div  className="h-[400px] flex-wrap flex gap-12 pl-28 pb-24">

<div className="w-full h-[30px] bg-white">
  <p className="pt-8  font-bold text-[20px] text-gray-900">Shake it up with our creamy delights!</p>
</div>

      <Card imgurl={Chocolate} name="Chocolate Shake" rs="100" p="veg" />
      <Card imgurl={Strawberry} name="Strawberry Milkshake" rs="134" p="veg" />
      <Card imgurl={Venilla} name="Vanilla Bean Milkshake" rs="153" p="veg" />
      <Card imgurl={Coffie} name="Caramel Coffee Milkshake" rs="356" p="veg" />

   


    </div>
  );
}

export default Shake;