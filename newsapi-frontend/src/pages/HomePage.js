import React, { useState, useEffect } from 'react';
import apiClient from '../services/api'; // Your Axios instance
import NewsList from '../components/NewsList';

const HomePage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        apiClient.get('/top-headlines?country=us&category=technology')
            .then(response => {
                console.log(response.data); // Debugging: Ensure correct data structure
                setArticles(response.data || []); // Update state with fetched articles
            })
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Top Headlines</h1>
            <NewsList articles={articles} /> {/* Pass the articles to the NewsList */}
        </div>
    );
};

export default HomePage;