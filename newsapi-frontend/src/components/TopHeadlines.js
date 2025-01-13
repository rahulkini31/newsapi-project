// components/TopHeadlines.js
import React, { useState, useEffect } from 'react';
import apiClient from '../services/api'; // Axios instance
import NewsList from './NewsList'; // Reuse your NewsList component

const TopHeadlines = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        apiClient.get('/news/top-headlines')  // Call the backend for top headlines
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => console.error('Error fetching top headlines:', error));
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Top Headlines</h1>
            <NewsList articles={articles} />
        </div>
    );
};

export default TopHeadlines;