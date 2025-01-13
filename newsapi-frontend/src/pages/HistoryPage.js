import React, { useEffect, useState } from 'react';
import apiClient from '../services/api'; // Your Axios instance

const HistoryPage = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Please log in first.');
            setLoading(false);
            return;
        }

        apiClient.get('/history', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                setHistory(response.data || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching history:', error);
                setError('Failed to load history.');
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Your Reading History</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HistoryPage;