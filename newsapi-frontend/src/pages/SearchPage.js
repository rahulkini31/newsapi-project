import React, { useState } from 'react';
import apiClient from '../services/api';
import NewsList from '../components/NewsList';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState([]);

    const handleSearch = () => {
        apiClient.get(`/search?query=${query}`)
            .then(response => setArticles(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Search News</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for news"
            />
            <button onClick={handleSearch}>Search</button>
            <NewsList articles={articles} />
        </div>
    );
};

export default SearchPage;