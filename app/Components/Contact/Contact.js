"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="py-16 px-6 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We'd love to hear from you! Feel free to drop us a message, and we'll get back to you as soon as possible.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
