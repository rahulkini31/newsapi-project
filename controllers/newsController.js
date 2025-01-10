const axios = require('../utils/apiClient');
const config = require('../config/config');

exports.getTopHeadlines = async (req, res, next) => {
    try {
        const { country, category } = req.query;
        const response = await axios.get('/top-headlines', {
            params: {
                country: country || 'us',
                category: category || 'general',
                apiKey: config.newsApiKey,
            },
        });
        res.json(response.data.articles);
    } catch (error) {
        next(error); // Pass the error to the error handler
    }
};

exports.searchNews = async (req, res, next) => {
    try {
        const { query } = req.query;
        const response = await axios.get('/everything', {
            params: {
                q: query,
                apiKey: config.newsApiKey,
            },
        });
        res.json(response.data.articles);
    } catch (error) {
        next(error);
    }
};