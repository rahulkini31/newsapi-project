import React, { useState, useEffect } from 'react';
import apiClient from '../services/api'; // Your Axios instance
import NewsList from '../components/NewsList'; // Reuse your NewsList component

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch top headlines from the backend API
        apiClient.get('/top-headlines')
            .then(response => {
                setArticles(response.data.articles || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching top headlines:', error);
                setError('Failed to load articles.');
                setLoading(false);
            });
    }, []);

    return (
        <div className="home-container">
            <h1>Top Headlines</h1>
            {loading ? (
                <div className="loading">Loading...</div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                <NewsList articles={articles} />
            )}
        </div>
    );
};

export default HomePage;