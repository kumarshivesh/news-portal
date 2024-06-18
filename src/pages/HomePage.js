import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../redux/actions/articleActions';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
import './styles.css'; // Ensure this matches the path to your CSS file

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, totalResults } = useSelector((state) => state.articles);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getArticles(category, page, searchTerm));
  }, [dispatch, category, page, searchTerm]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSaveToFavorites = (article) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, article];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <div>
      <Navbar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="articles-list">
        {articles
          .filter(article => article.title !== '[Removed]' && article.description !== '[Removed]' && article.urlToImage)
          .map((article) => (
            <ArticleCard key={article.url} article={article} onSaveToFavorites={handleSaveToFavorites} />
          ))}
      </div>
      <Pagination currentPage={page} totalResults={totalResults} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
