import Cardcategories from './cardcategories';
import React from 'react';
import Pizza from './Pizza.png';
import Biryani from './Biryani.png';
import Shake from './Shake.png';
import PureVeg from './PureVeg.png';
import Paratha from './Paratha.png';
import Chinese from './Chinese.png';

function categories() {
  return (
    <div className="w-screen h-[400px] bg-none px-[100px] py-[100px]">
<div>
  
      <h1 className="mb-12 font-bold text-2xl"> What Are You Hungry For Today?
        </h1>
</div>
     <div className="flex flex-wrap gap-12">
       <Cardcategories imgurl={Pizza} name="Pizza"/>
      <Cardcategories name="Biryani" imgurl={Biryani}/>
      <Cardcategories name="Shake" imgurl={Shake}/>
      <Cardcategories name="Pure Veg" imgurl={PureVeg}/>
      <Cardcategories name="Paratha" imgurl={Paratha}/>
      <Cardcategories name="Chinese" imgurl={Chinese}/>
    
     </div>

    </div>
  );
}

export default categories;
