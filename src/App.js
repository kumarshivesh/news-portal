import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Updated imports
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

const App = () => {
  return (
    <div className="App">
      <Routes> {/* Changed from Switch to Routes */}
        <Route path="/" element={<HomePage />} /> {/* Updated Route syntax */}
        <Route path="/article/:url" element={<ArticlePage />} /> {/* Updated Route syntax */}
      </Routes>
    </div>
  );
};

export default App;
