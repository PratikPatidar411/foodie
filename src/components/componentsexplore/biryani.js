import React from 'react';
import Card from './Card'
import Pulav from '../images/Pulav.png';
import Lucknavi from '../images/Lucknavibir.png';
import Kolkata from '../images/Kolkatabir.png';
import Malabar from '../images/Malabarbir.png';










function Biryani() {
  // Base Functionality of Pizza component
  return (
    <div  className="h-[400px] flex-wrap flex gap-12 pl-28 pb-24">

<div className="w-full h-[30px] bg-white">
  <p className="pt-8  font-bold text-[20px] text-gray-900">Craving biryani? We have something special!</p>
</div>

      <Card imgurl={Pulav} name="Pulao" rs="100" p="veg" />
      <Card imgurl={Lucknavi} name="Lucknavi biryani" rs="134" p="Non=veg" />
      <Card imgurl={Kolkata} name="Kolkata biryani" rs="153" p="Non-veg" />
      <Card imgurl={Malabar} name="Malabar biryani" rs="356" p="Non-veg" />

   


    </div>
  );
}

export default Biryani;