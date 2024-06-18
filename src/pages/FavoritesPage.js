import React, { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from local storage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleRemoveFromFavorites = (url) => {
    const updatedFavorites = favorites.filter(article => article.url !== url);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1 className='favorites-head'>Favorites</h1>
      <div className="articles-list">
        {favorites.map((article) => (
          <ArticleCard 
            key={article.url} 
            article={article} 
            onRemoveFromFavorites={handleRemoveFromFavorites} 
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
