"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const cars = [
  {
    id: "1",
    img: "/fc1.png",
    model: "Model: 2025, 0 mi, 300HP Electric AWD",
    title: "BMW 6-Series Gran Coupe",
    price: "$98,500",
    discripition: "The 2025 BMW 6-Series Gran Coupe offers unparalleled luxury and performance with advanced electric all-wheel drive and cutting-edge technology.",
  },
  {
    id: "2",
    img: "/fc2.png",
    model: "Model: 2025, 0 mi, 310HP Hybrid",
    title: "Chevrolet Camaro WMV20",
    price: "$72,000",
    discripition: "This next-generation Chevrolet Camaro boasts a powerful hybrid drivetrain and dynamic styling for an exhilarating driving experience.",
  },
  {
    id: "3",
    img: "/fc3.png",
    model: "Model: 2025, 0 mi, 350HP V8 Hybrid",
    title: "Lamborghini V520",
    price: "$135,900",
    discripition: "The Lamborghini V520 combines raw power with hybrid efficiency, delivering unmatched performance in a sleek, aerodynamic design.",
  },
  {
    id: "4",
    img: "/fc4.png",
    model: "Model: 2025, 0 mi, 300HP Electric Sedan",
    title: "Audi A3 Sedan",
    price: "$102,000",
    discripition: "The 2025 Audi A3 Sedan redefines modern luxury with its advanced electric powertrain, premium interior, and innovative technology.",
  },
  {
    id: "5",
    img: "/fc5.png",
    model: "Model: 2025, 0 mi, 280HP Electric",
    title: "Infiniti Z5",
    price: "$40,900",
    discripition: "The Infiniti Z5 offers a seamless blend of style, efficiency, and cutting-edge electric performance for the modern driver.",
  },
  {
    id: "6",
    img: "/fc6.png",
    model: "Model: 2025, 0 mi, 350HP Hybrid",
    title: "Porsche 718 Cayman",
    price: "$55,000",
    discripition: "The Porsche 718 Cayman stands out with its powerful hybrid engine, precision handling, and timeless design.",
  },
  {
    id: "7",
    img: "/fc7.png",
    model: "Model: 2025, 0 mi, 400HP Electric AWD",
    title: "BMW 8-Series Coupe",
    price: "$68,000",
    discripition: "The BMW 8-Series Coupe offers a premium electric all-wheel-drive system, ensuring top-tier performance and comfort.",
  },
  {
    id: "8",
    img: "/fc8.png",
    model: "Model: 2025, 0 mi, 350HP Electric SUV",
    title: "BMW Xseries-6",
    price: "$82,500",
    discripition: "The BMW Xseries-6 is a cutting-edge electric SUV that combines luxury, performance, and versatility for all your adventures.",
  },
];

const Cars = () => {
  const cardVariants = {
    offscreenLeft: { opacity: 0, x: -100 },
    offscreenRight: { opacity: 0, x: 100 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <div id="fcars" className="w-full overflow-hidden py-10">
      {/* Heading */}
      <div className="w-full flex flex-col gap-3 justify-center items-center p-4">
        <h5 className="text-lg">Checkout the Featured Cars</h5>
        <h2 className="text-5xl font-semibold">Featured Cars</h2>
        <div className="w-[5%] mt-4">
          <hr className="border-t-2 border-blue-800 group-hover:border-white" />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            className="bg-white flex justify-center items-center flex-col rounded-lg shadow-lg shadow-gray-400 border border-gray-300 overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            initial={index % 2 === 0 ? "offscreenLeft" : "offscreenRight"}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="relative w-40 h-40">
              <Image
                src={car.img}
                alt={car.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="p-5">
              <div className="border border-gray-300 rounded-md p-4 mb-3">
                <p className="text-sm text-gray-600">{car.model}</p>
              </div>
              <h3 className="text-lg font-bold">{car.title}</h3>
              <p className="text-lg font-semibold mt-2">{car.price}</p>
              <p className="text-sm mt-2">{car.discripition}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
