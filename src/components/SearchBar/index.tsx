import React, { useCallback, useState } from 'react';

type SearchBarProps = {
  onSearch: (query: string, source: string, category: string, date: string) => void;
};

const SearchBar = ({ onSearch}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleQueryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleSourceChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSource(e.target.value);
  }, []);

  const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  }, []);

  const handleDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery, selectedSource, selectedCategory, selectedDate);
  }, [onSearch, searchQuery, selectedSource, selectedCategory, selectedDate]);

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleQueryChange}
        />
        <select onChange={handleSourceChange} value={selectedSource}>
          <option value="">All Sources</option>
          <option value="bbc-news">BBC News</option>
          <option value="cnn">CNN</option>
          <option value="the-guardian">The Guardian</option>
        </select>
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All Categories</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="science">Science</option>
          <option value="environment">Environment</option>
        </select>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <button type="submit" className='search-btn'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
