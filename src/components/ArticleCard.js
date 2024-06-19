import React from 'react';

const ArticleCard = ({ article, onSaveToFavorites, onRemoveFromFavorites }) => {
  
  if (
    article.title === '[Removed]' || 
    article.description === '[Removed]' || 
    !article.urlToImage
  ) {
    return null;
  }

  return (
    <div className="article-card">
        <img src={article.urlToImage} alt={article.title} />
      <h2>{article.title.slice(0, 79)}</h2>
      <p>{article.description.slice(0, 109)}</p>
      <div className='botton-container'>
        <a className='button' href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        {onSaveToFavorites && (
          <button className='button save' onClick={() => onSaveToFavorites(article)}>Save to Favorites</button>
        )}
        {onRemoveFromFavorites && (
          <button className='button remove' onClick={() => onRemoveFromFavorites(article.url)}>Remove</button>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
