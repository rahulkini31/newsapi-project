// components/SearchNews.js
import React, { useState } from 'react';
import apiClient from '../services/api';
import NewsList from './NewsList';

const SearchNews = () => {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState([]);

    const handleSearch = () => {
        if (query.trim()) {
            apiClient.get(`/news/search?query=${query}`)
                .then(response => setArticles(response.data))
                .catch(error => console.error('Error searching news:', error));
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Search for News</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search query"
                style={{ padding: '10px', width: '300px' }}
            />
            <button onClick={handleSearch} style={{ marginLeft: '10px', padding: '10px' }}>
                Search
            </button>
            <NewsList articles={articles} />
        </div>
    );
};

export default SearchNews;