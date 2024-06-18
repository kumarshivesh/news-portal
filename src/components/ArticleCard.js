import React from 'react';



const ArticleCard = ({ article, onSaveToFavorites, onRemoveFromFavorites }) => {
  const [imgSrc, setImgSrc] = React.useState(article.urlToImage);

  // Check if the article should be rendered
  if (
    article.title === '[Removed]' || 
    article.description === '[Removed]' || 
    !article.urlToImage
  ) {
    return null;
  }

  return (
    <div className="article-card">
      <div className="image-container">
      <img src={imgSrc} alt={article.title}  />
      </div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <div className="botton-container">
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        {onSaveToFavorites && (
          <button onClick={() => onSaveToFavorites(article)}>Save to Favorites</button>
        )}
        {onRemoveFromFavorites && (
          <button onClick={() => onRemoveFromFavorites(article.url)}>Remove</button>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
