import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import Privacy from './pages/privacy/Privacy'
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
      <Route path="/privacy" element={<Privacy />} /> {/* 👈 Renders at /app/ */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
