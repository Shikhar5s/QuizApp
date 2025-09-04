import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import questionsData from "../data/questions.json";

const Questions = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();
  const currentQ = questionsData[index];

  useEffect(() => setTimeLeft(30), [index]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleNext();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSelect = (option) => setSelected(option);

  const handleNext = () => {
    if (!selected) return;
    const isCorrect = selected === currentQ.correct;
    if (isCorrect) setScore((s) => s + 1);
    const newAnswers = [...answers, { ...currentQ, selected, isCorrect }];
    setAnswers(newAnswers);
    if (index + 1 < questionsData.length) {
      setIndex((i) => i + 1);
      setSelected(null);
    } else {
      navigate("/result", { state: { answers: newAnswers, score: score + (isCorrect ? 1 : 0) } });
    }
  };

  return (
    <motion.div className="min-h-screen w-full bg-gray-900 text-white flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-xl">
        <p className="mb-2">Question {index + 1} of {questionsData.length}</p>
        <div className="w-full bg-gray-700 h-2 rounded mb-4">
          <div className="bg-blue-500 h-2 rounded" style={{ width: `${((index + 1) / questionsData.length) * 100}%` }}></div>
        </div>
        <p className="text-red-400 font-bold mb-4">Time Left: {timeLeft}s</p>

        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">{currentQ.question}</h2>
            {currentQ.options.map((opt, i) => (
              <motion.button
                key={i}
                onClick={() => handleSelect(opt)}
                className={`block w-full text-left p-2 border rounded my-1 ${selected === opt ? "bg-blue-500 text-white" : "bg-gray-800 text-white"}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {opt}
              </motion.button>
            ))}
            <motion.button
              onClick={handleNext}
              disabled={!selected}
              className="bg-green-500 text-white px-6 py-2 rounded mt-4 disabled:bg-gray-600"
              whileHover={{ scale: selected ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              {index + 1 === questionsData.length ? "Finish" : "Next"}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Questions;
