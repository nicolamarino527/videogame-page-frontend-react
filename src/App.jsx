import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

import './App.css';

import HomePage from './pages/HomePage';
import Defaultlayout from './layout/DefaultLayout';
import GamesPage from './pages/GamesPage';
import GameDetailPage from './pages/GameDetailPage';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Defaultlayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/videogames" element={<GamesPage />} />
            <Route path="/videogames/:id" element={<GameDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
