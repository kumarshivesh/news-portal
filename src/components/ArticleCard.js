import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ArticleCard = ({ article, onSaveToFavorites }) => {
  const [imgSrc, setImgSrc] = React.useState(article.urlToImage);

  // Check if the article should be rendered
  if (
    article.title === '[Removed]' || 
    article.description === '[Removed]' || 
    !article.urlToImage // Check if image source is present
  ) {
    return null; // Do not render the card if title, description, or image is invalid
  }

  const handleError = () => {
    setImgSrc('path_to_default_image'); // Replace with the path to a default image
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
        <Link to={`/article/${encodeURIComponent(article.url)}`}>Read More</Link>
      )}
      <button onClick={() => onSaveToFavorites(article)}>Save to Favorites</button>
    </div>
  );
};

export default ArticleCard;
