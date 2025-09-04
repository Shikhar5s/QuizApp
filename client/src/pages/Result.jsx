import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers = [], score = 0 } = location.state || {};

  return (
    <motion.div
      className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full max-w-3xl text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          Quiz Results
        </h1>
        <p className="text-xl mb-8">
          You scored <span className="font-bold text-green-400">{score}</span> out of {answers.length}
        </p>

        <div className="space-y-4">
          <AnimatePresence>
            {answers.map((ans, i) => (
              <motion.div
                key={i}
                className={`p-4 rounded-xl shadow-lg ${
                  ans.isCorrect ? "bg-green-800" : "bg-red-800"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-semibold mb-2">
                  Q{i + 1}: {ans.question}
                </p>
                <p className="mb-1">Your answer: {ans.selected}</p>
                {!ans.isCorrect && (
                  <p className="text-blue-400">Correct answer: {ans.correct}</p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 bg-green-500 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Restart Quiz
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Result;
