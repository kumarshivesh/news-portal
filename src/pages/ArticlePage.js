import React from 'react';
import { useLocation } from 'react-router-dom';

const ArticlePage = () => {
  const location = useLocation();
  const article = location.state.article;

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
