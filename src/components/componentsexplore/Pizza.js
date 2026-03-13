import React from 'react';
import Card from './Card'
import onion from '../images/onion.png';
import Pepperoni from '../images/pepperoni.png';
import Margherita from '../images/Margherita.png';
import Mushroom from '../images/Mushroom.png';
import Bbq from '../images/Bbq.png';
import Cheese from '../images/Cheese.png';
import Paneer from '../images/Paneer.png';
import Classic from '../images/Classic.png';






function Pizza() {
  // Base Functionality of Pizza component
  return (
    <div  className="h-auto flex-wrap flex gap-12 pl-0 md:pl-28 pb-24">

<div className="w-full h-[30px] bg-white mb-8">
  <p className="pt-8  font-bold text-[20px] text-gray-900 ">Craving Pizza? We’ve Got Your Slice of Happiness!</p>
</div>

      <Card imgurl={Margherita} name="Margherita Pizza" rs="100" p="veg" />
      <Card imgurl={Pepperoni} name="Pepperoni Pizza" rs="134" p="veg" />
      <Card imgurl={onion} name="Onion Pizza" rs="235" p="veg" />
      <Card imgurl={Mushroom} name="Mushroom Pizza" rs="153" p="veg" />
      <Card imgurl={Bbq} name="BBQ chicken Pizza" rs="356" p="Non-veg" />
      <Card imgurl={Cheese} name="Cheese Pizza" rs="325" p="veg" />
      <Card imgurl={Paneer} name="Paneer Pizza" rs="367" p="veg" />
      <Card imgurl={Classic} name="Classic Pizza" rs="126" p="veg" />
   


    </div>
  );
}

export default Pizza;