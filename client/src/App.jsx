import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Start from './pages/start'
import Questions from './pages/Questions'
import Result from './pages/Result'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
