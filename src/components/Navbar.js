import React, { useState } from 'react';

const Navbar = ({ onCategoryChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav>
      <h1>React News Portal</h1>
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">All</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search articles..."
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
  );
};

export default Navbar;
