const axios = require('axios');
const config = require('../config/config');

const apiClient = axios.create({
    baseURL: config.newsApiUrl,
});

module.exports = apiClient;