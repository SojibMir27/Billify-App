import React from "react";
import { motion } from "motion/react";
import { FaHome } from "react-icons/fa";
import Animotion from "../Animotion/Animotion";
import UseTitle from "../hooks/UseTitle";

const ErrorPage = () => {
  UseTitle("Error-404 || Billify");

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <Animotion>
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-gradi-to-br from-gray-900 via-indigo-950 to-gray-900 text-white relative overflow-hidden`}
      >
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 80, -80, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-purple-500/25 rounded-full blur-3xl"
          animate={{ x: [0, -100, 100, 0], y: [0, -60, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center p-6"
        >
          <motion.h1
            className="text-[6rem] md:text-[9rem] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 drop-shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.h1>

          <p className="text-lg md:text-2xl text-gray-300 font-medium mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoHome}
            className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            <FaHome className="text-lg" />
            Go Back Home
          </motion.button>
        </motion.div>
      </div>
    </Animotion>
  );
};

export default ErrorPage;
