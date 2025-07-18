import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import HomePage from './pages/HomePage';
import Navbar from './components/NavBar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/videogames" element={<GamesPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
