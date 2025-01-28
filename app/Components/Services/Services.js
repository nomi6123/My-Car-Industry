"use client";
import { FaCar, FaTools, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Largest Dealership of Cars",
    description: "We offer the widest selection of cars to meet every preference, ensuring you find the perfect vehicle.",
    icon: <FaCar />,
  },
  {
    title: "Unlimited Repair Warranty",
    description: "Our repair warranty gives you peace of mind with unlimited coverage for all your vehicle's repair needs.",
    icon: <FaTools />,
  },
  {
    title: "Insurance Support",
    description: "We provide comprehensive insurance support to protect you and your vehicle at all times.",
    icon: <FaShieldAlt />,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20, delay: 0.2 },
  },
};

const Services = () => {
  return (
    <div id="services" className="w-full min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md  shadow-gray-400 border border-gray-300 hover:bg-[#4E4FFA] hover:text-white 
              group gap-4 rounded-lg p-6 text-center flex flex-col justify-center items-center min-h-96 transform transition-transform duration-300 hover:scale-105"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="text-7xl text-gray-600 group-hover:text-white mb-4">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">{card.title}</h3>
              <p className="text-gray-600 text-sm group-hover:text-white">{card.description}</p>
              <div className="w-[10%] mt-4">
                <hr className="border-t-4 border-blue-800 group-hover:border-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
