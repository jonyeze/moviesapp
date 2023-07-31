import React from 'react';
import NavBar from './Components/NavBar/Nav';
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetails } from './pages/MovieDetails';
import AboutPages from  './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <header className="App">
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
        <Route path='/AboutPages' element={<AboutPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
