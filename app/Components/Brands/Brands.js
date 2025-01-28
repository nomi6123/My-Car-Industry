"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Brands = () => {
  // Animation configuration for sliding in from left to right
  const slideIn = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0, // End in the center
      transition: { duration: 1, ease: 'easeInOut' },
    },
  }

  return (
    <div id="brands">
      <div className="w-full min-h-[50vh] flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10">
          {/* Image 1 */}
          <motion.div
            className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideIn}
          >
            <Image
              src="/br1.png"
              alt="Brand 1"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideIn}
          >
            <Image
              src="/br2.png"
              alt="Brand 2"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideIn}
          >
            <Image
              src="/br3.png"
              alt="Brand 3"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideIn}
          >
            <Image
              src="/br4.png"
              alt="Brand 4"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Image 5 */}
          <motion.div
            className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideIn}
          >
            <Image
              src="/br5.png"
              alt="Brand 5"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Image 6 */}
          <motion.div
            className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideIn}
          >
            <Image
              src="/br6.png"
              alt="Brand 6"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Brands
