"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div id="home" className="w-full">
      <div className="w-full flex justify-center">
        <div
          className="relative overflow-hidden bg-[url('/car1.jpg')] bg-cover bg-center w-full max-w-[1440px] min-h-screen flex justify-center items-center"
          aria-label="Hero background"
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-[#7674ac] bg-opacity-50"></div>

          {/* Center Content */}
          <div className="relative w-full flex flex-col items-center gap-5 p-5 z-10">
            {/* Heading */}
            <h2 className="uppercase text-3xl md:text-5xl font-bold tracking-tighter p-5 text-white text-center">
              Get your desired car in reasonable price
            </h2>

            {/* Slider */}
            <Slider {...sliderSettings} className="w-[95%] md:w-[80%]">
              <div className="p-4">
                <p className="font-medium md:font-semibold text-lg md:text-2xl text-white text-center">
                  Find the car of your dreams with unbeatable prices.
                </p>
              </div>
              <div className="p-4">
                <p className="font-medium md:font-semibold text-lg md:text-2xl text-white text-center">
                  Best deals, top brands, and exceptional service.
                </p>
              </div>
              <div className="p-4">
                <p className="font-medium md:font-semibold text-lg md:text-2xl text-white text-center">
                  Your journey starts with us. Explore our collection.
                </p>
              </div>
            </Slider>

            {/* Button */}
            <button className="bg-[#4E4FFA] py-3 md:py-4 px-10 md:px-14 text-lg md:text-xl text-white hover:bg-[#0102FA] transition transform duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
