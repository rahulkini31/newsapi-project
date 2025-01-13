// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopHeadlines from './components/TopHeadlines';
import SearchNews from './components/SearchNews';
import AllNews from './components/AllNews';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/top-headlines" element={<TopHeadlines />} />
                <Route path="/search" element={<SearchNews />} />
                <Route path="/all-news" element={<AllNews />} />
            </Routes>
        </Router>
    );
};

export default App;