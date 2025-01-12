const axios = require('axios');
const config = require('../config/config');

// const apiClient = axios.create({
//     baseURL: config.newsApiUrl,
// });

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/news', // Ensure this matches your backend
});

module.exports = apiClient;