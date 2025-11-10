// File: AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-11/12 flex flex-col items-center justify-center mx-auto py-35">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-purple-500/20 rounded-2xl shadow-2xl p-8 max-w-xl text-center border border-pink-500/30"
      >
        <h2 className="text-3xl font-bold mb-4">
          About Utility Bill Management System
        </h2>
        <p className="mb-6 opacity-70">
          This system helps you keep track of your utility bills including
          electricity, water, gas, and internet. Easily monitor due dates,
          amounts, and payment history, all in one intuitive dashboard. Our goal
          is to simplify bill management and ensure you never miss a payment
          again.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn w-1/2 text-white mt-4 rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 border-none"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
