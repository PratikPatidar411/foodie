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
    <div className="w-full px-6 sm:px-8 lg:px-16 py-12 bg-none">
      <div className="text-center mb-12">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">What Are You Hungry For Today?</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-12 overflow-x-auto">
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