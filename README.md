
# 🎯 React Quiz App

A **dark-themed, animated Quiz App** built with **React**, **Tailwind CSS**, and **Framer Motion**.  
Test your knowledge with multiple-choice questions, track your score, and view detailed results in a clean, responsive interface.

---

## 🚀 Live Demo

Check out the live app: [https://quiz-app-v3zw.vercel.app/](https://quiz-app-v3zw.vercel.app/)

---

## 🌟 Features

- **Responsive UI**: Works on desktop and mobile devices.
- **One question at a time**: Focused quiz experience.
- **Answer tracking**: Highlights selected answers, shows correct/incorrect selections.
- **Timer per question**: 30-second countdown auto-submits if time runs out.
- **Progress indicator**: See which question you’re on with a dynamic progress bar.
- **Animated transitions**: Smooth fade-in/out for questions and result cards.
- **Results page**: Detailed summary of answers and score.
- **Restart quiz**: Try again anytime.
- **Dark theme**: Easy on the eyes, modern design.

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)  
- **React Router** for navigation  
- **Tailwind CSS** for styling  
- **Framer Motion** for animations  
- **Local JSON** file for questions  

---

## 📂 Project Structure
/src
  /pages
    Start.jsx         → Landing page with “Start Quiz” button.
    Questions.jsx     → Quiz page handling question flow, timer, and scoring.
    Result.jsx        → Displays quiz results and allows restart.
  /data
    questions.json    → Local JSON file containing quiz questions.
  App.jsx             → Main app, contains routing logic.
  index.jsx           → React DOM render entry point.


