import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Updated imports
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage'; // Import FavoritesPage
import ArticlePage from './pages/ArticlePage'; // Import ArticlePage

const App = () => {
  return (
    <div className="App">
      <Routes> {/* Changed from Switch to Routes */}
        <Route path="/" element={<HomePage />} /> {/* Updated Route syntax */}
        <Route path="/favorites" element={<FavoritesPage />} /> {/* Add route for FavoritesPage */}
        <Route path="/article/:url" element={<ArticlePage />} /> {/* Updated Route syntax */}
      </Routes>
    </div>
  );
};

export default App;
