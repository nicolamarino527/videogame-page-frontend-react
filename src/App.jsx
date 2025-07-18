import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import HomePage from './pages/HomePage';
import Navbar from './components/NavBar';
import Defaultlayout from './layout/DefaultLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route element={<Defaultlayout />}>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/videogames" element={<GamesPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
