import React from 'react';

const ArticleCard = ({ article, onSaveToFavorites, onRemoveFromFavorites }) => {
  const [imgSrc, setImgSrc] = React.useState(article.urlToImage);

  if (
    article.title === '[Removed]' || 
    article.description === '[Removed]' || 
    !article.urlToImage
  ) {
    return null;
  }

  const handleError = () => {
    setImgSrc('/image-not-found-1150x647.png'); // Use the path relative to the public folder
  };

  const isExternal = article.url.startsWith('http');

  return (
    <div className="article-card">
      <img src={imgSrc} alt={article.title} onError={handleError} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      {isExternal ? (
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
      ) : (
        <a href={`/article/${encodeURIComponent(article.url)}`}>Read More</a> // Replaced Link with a tag
      )}
      {onSaveToFavorites && (
        <button onClick={() => onSaveToFavorites(article)}>Save to Favorites</button>
      )}
      {onRemoveFromFavorites && (
        <button onClick={() => onRemoveFromFavorites(article.url)}>Remove</button>
      )}
    </div>
  );
};

export default ArticleCard;
