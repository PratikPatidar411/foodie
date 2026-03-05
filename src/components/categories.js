import Cardcategories from './cardcategories';
import React from 'react';
import Pizza from './Pizza.png';

function categories() {
  return (
    <div className="w-screen h-[400px] bg-none px-[100px] py-[100px]">
<div>
  
      <h1 className="mb-12"> Pratik
        </h1>
</div>
     <div className="flex flex-wrap gap-12">
       <Cardcategories imgurl={Pizza} name="Pizza"/>
      <Cardcategories name="pratik"/>
      <Cardcategories name="pratik"/>
      <Cardcategories name="pratik"/>
      <Cardcategories name="pratik"/>
      <Cardcategories name="pratik"/>
      <Cardcategories name="pratik"/>
     </div>

    </div>
  );
}

export default categories;
