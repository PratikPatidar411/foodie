import React from 'react';

const Hero = () => {
  // Replace with your actual pizza image or keep the placeholder
  const pizzaImage = "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000&auto=format&fit=crop";

  return (
    <section className="mt-12 font-poppins">
      <div className=" bg-[#F29F67] max-w-[1200px] w-[90%] mx-auto rounded-lg">
        <div className="bg-brandOrange rounded-[20px] overflow-hidden flex flex-col md:flex-row min-h-[400px]">
          
          {/* Left Text Area */}
          <div className="flex-1 md:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">
              Pooble Pizza
            </h1>
            <button className="bg-blue-400 hover:bg-btnHover text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-sm">
              Order Now
            </button>
          </div>

          {/* Right Image Area with Curve */}
          <div className="flex-1 relative h-[300px] md:h-auto">
            {/* The classes below create the specific curve:
              - md:rounded-l-full creates the semi-circle on the left edge on larger screens
              - -ml-12 pulls it to the left to overlap the orange area
            */}
            <img 
              src={pizzaImage} 
              alt="Delicious Pizza" 
              className="w-full h-full object-cover md:absolute md:top-0 md:left-0 md:rounded-l-[50%_100%] md:-ml-12"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;