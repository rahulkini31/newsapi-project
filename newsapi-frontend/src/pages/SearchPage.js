import React, { useState } from 'react';
import apiClient from '../services/api';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState([]);

    const handleSearch = () => {
        const token = localStorage.getItem('token');
        apiClient
            .get(`/search?query=${query}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => setArticles(response.data))
            .catch((error) => console.error(error));
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Search News</h1>
            <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
            <NewsList articles={articles} />
        </div>
    );
};

export default SearchPage;