import React from 'react';

function Card(props) {
  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    const itemToAdd = {
      name: props.name,
      price: props.rs,
      img: props.imgurl,
      desc: props.p
    };
    props.addToCart(itemToAdd); 
  };

  return (
    <div className="flex justify-center">
      <a href={props.pathh}>
        <div className="w-[150px] sm:w-[230px] lg:w-[230px] h-[250px] sm:h-[auto] bg-[#F29F67] rounded-lg border border-[#F29F67] border-[10px]">
          <img src={props.imgurl} alt={props.name} className="h-[100px] sm:h-[120px] w-full rounded-lg object-cover" />
          <p className="text-orange-950 text-[16px] sm:text-[22px] md:text-[24px] ml-1 font-bold">{props.name}</p>
          <p className="text-orange-950 text-[16px] sm:text-[20px] md:text-[22px] font-bold">
            <i className="fa-solid fa-indian-rupee-sign"></i>{props.rs}
          </p>
          <p className="text-orange-950 text-[16px] sm:text-[20px] md:text-[22px] mb-1 font-bold">{props.p}</p>

          <div className="w-full items-row flex justify-center mt-2">
            <button 
              onClick={handleAddToCart}
              className="w-[80px] sm:w-[120px] md:w-[140px] text-[12px] sm:text-[16px] h-8 border-[1px] border-gray-900 text-white font-semibold rounded-lg bg-[#431407] hover:bg-[#2b0c04] transition-colors"
            >
              Add to cart
            </button>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card;