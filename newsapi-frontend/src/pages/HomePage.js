import React, { useState, useEffect } from 'react';
import apiClient from '../services/api';
import NewsList from '../components/NewsList';

const HomePage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token'); // Check for token
        if (!token) {
            window.location.href = '/login'; // Redirect to login
            return;
        }

        apiClient
            .get('/top-headlines?country=us&category=technology', {
                headers: { Authorization: `Bearer ${token}` }, // Attach token
            })
            .then((response) => setArticles(response.data || []))
            .catch((error) => console.error('Error fetching news:', error));
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Top Headlines</h1>
            <NewsList articles={articles} />
        </div>
    );
};

export default HomePage;