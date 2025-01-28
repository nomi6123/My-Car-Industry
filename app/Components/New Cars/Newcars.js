"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Newcars = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <motion.div
      id="ncars"
      className="w-full overflow-hidden min-h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          className="w-full flex flex-col gap-3 justify-center items-center p-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-lg text-gray-700">Checkout the Latest Cars</h5>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Newest Cars
          </h2>
          <motion.div
            className="w-[10%] mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <hr className="border-t-2 border-blue-800" />
          </motion.div>
        </motion.div>

        {/* About with Sliders */}
        <div className="w-full flex flex-wrap justify-center items-center gap-5 py-10">
          {/* Image Slider */}
          <motion.div
            className="w-full md:w-[45%] h-[250px] md:h-[400px]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Slider {...settings}>
              <div className="relative w-full h-full">
                <Image
                  src="/ncm1.png"
                  alt="Chevrolet Camaro ZA100"
                  width={1000}
                  height={1000}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src="/ncm2.png"
                  alt="BMW Series-3 Wagon"
                  width={1000}
                  height={1000}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src="/ncm3.png"
                  alt="Ferrari 488 Superfast"
                  width={1000}
                  height={1000}
                  className="object-contain"
                  priority
                />
              </div>
            </Slider>
          </motion.div>

          {/* Text Slider */}
          <motion.div
            className="w-full md:w-[45%] p-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Slider {...settings}>
              <div>
                <h2 className="text-2xl md:text-4xl mb-4 font-semibold">
                  Chevrolet Camaro ZA100
                </h2>
                <p className="text-base md:text-lg mb-4">
                  The Chevrolet Camaro ZA100 is a symbol of power and precision.
                  Featuring a roaring V8 engine, bold design, and cutting-edge
                  technology, it’s the perfect car for enthusiasts who crave
                  performance and style.
                </p>
                <button className="bg-blue-500 py-3 px-8 text-sm md:text-lg text-white rounded hover:bg-blue-700 transition transform duration-300 ease-in-out">
                  View Details
                </button>
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl mb-4 font-semibold">
                  BMW Series-3 Wagon
                </h2>
                <p className="text-base md:text-lg mb-4">
                  The BMW Series-3 Wagon combines luxury, versatility, and
                  driving pleasure. Its spacious interior, advanced features,
                  and sporty handling make it ideal for families and
                  professionals alike.
                </p>
                <button className="bg-blue-500 py-3 px-8 text-sm md:text-lg text-white rounded hover:bg-blue-700 transition transform duration-300 ease-in-out">
                  View Details
                </button>
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl mb-4 font-semibold">
                  Ferrari 488 Superfast
                </h2>
                <p className="text-base md:text-lg mb-4">
                  The Ferrari 488 Superfast is an engineering marvel with
                  unmatched performance. Featuring a turbocharged V8 engine,
                  aerodynamic design, and luxurious interiors, it’s a true
                  masterpiece for speed lovers.
                </p>
                <button className="bg-blue-500 py-3 px-8 text-sm md:text-lg text-white rounded hover:bg-blue-700 transition transform duration-300 ease-in-out">
                  View Details
                </button>
              </div>
            </Slider>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Newcars;
