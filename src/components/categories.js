import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Cardcategories from './cardcategories';
import Pizza from './images/Pizza.png';
import Biryani from './images/Biryani.png';
import Shake from './images/Shake.png';
import PureVeg from './images/PureVeg.png';
import Paratha from './images/Paratha.png';
import Chinese from './images/Chinese.png';

function Categories() {
  const categoryItems = [
    { name: 'Pizza', imgurl: Pizza },
    { name: 'Biryani', imgurl: Biryani },
    { name: 'Shake', imgurl: Shake },
    { name: 'Pure Veg', imgurl: PureVeg },
    { name: 'Paratha', imgurl: Paratha },
    { name: 'Chinese', imgurl: Chinese },
  ];

  return (
    <div className="w-full h-[400px] bg-none px-[100px] py-[100px]">
      <div>
        <h1 className="mb-12 font-bold text-2xl">What Are You Hungry For Today?</h1>
      </div>

      <div className="overflow-x-auto flex flex-row gap-12">
        {categoryItems.map((item, index) => (
          <Link key={index} to={`/category/${item.name.toLowerCase()}`}>
            <Cardcategories name={item.name} imgurl={item.imgurl} alt={"failed to load"} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;