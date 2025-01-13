// components/AllNews.js
import React, { useState, useEffect } from 'react';
import apiClient from '../services/api';
import NewsList from './NewsList';

const AllNews = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        apiClient.get('/news/everything')
            .then(response => setArticles(response.data))
            .catch(error => console.error('Error fetching all news:', error));
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>All News</h1>
            <NewsList articles={articles} />
        </div>
    );
};

export default AllNews;