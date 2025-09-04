import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Start = () => {
  const navigate = useNavigate();

  const select = () => {
    navigate("/questions");
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center p-8 bg-gray-900 rounded-3xl shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
          Start Quiz
        </h1>
        <motion.button
          onClick={select}
          className="bg-green-500 text-white px-8 py-4 rounded-xl text-xl font-semibold shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Begin
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Start;
