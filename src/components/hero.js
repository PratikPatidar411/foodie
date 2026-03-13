import React, { useState, useEffect, useCallback } from 'react';
import Pizza from './images/Pizzaheroo.png';
import Biryani from './images/Biryanihero.png';
import Shake from './images/Shakehero.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [redirect, setredirct] = useState(0);
  const navigate = useNavigate('');

  // Array of items including both name (for the heading) and image source
  const carouselItems = [
    { name: 'Pizza', src: Pizza },
    { name: 'Biryani', src: Biryani },
    { name: 'Shake', src: Shake },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  }, [carouselItems.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

const handleorder = () => {
  navigate(`/category/${carouselItems[currentIndex].name.toLowerCase()}`);
};



  return (
    <section className="mt-12 font-poppins">
      <div className="bg-[#F29F67] max-w-[1200px] w-[90%] mx-auto rounded-lg h-[400px]">
        {/* Main Carousel Container - Added relative and overflow-hidden here */}
        <div className="bg-brandOrange rounded-[20px] overflow-hidden relative min-h-[400px]">
          
          {/* Sliding Track - Translates the entire flex container */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 flex flex-col md:flex-row min-h-[400px]">
                
                {/* Left Text Area */}
                <div className="flex-1 md:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 px-4 py-8 md:py-0 ml-44">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">
                    {item.name}
                  </h1>
                  <button className="bg-blue-400 hover:bg-btnHover text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-sm" onClick={handleorder}>
                    Order Now
                  </button>
                </div>

                {/* Right Image Area */}
                <div className="flex-1 relative h-[300px] md:h-auto">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-[400px] object-fill"
                  />
                </div>

              </div>
            ))}
          </div>

          {/* Prev/Next buttons - Moved outside the sliding track to sit on top of the banner */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black text-white p-3 rounded-full shadow-lg transition-colors z-20"
          >
            &#60;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black text-white p-3 rounded-full shadow-lg transition-colors z-20"
          >
            &#62;
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;