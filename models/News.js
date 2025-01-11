const mongoose = require('mongoose');

// Define schema for news articles
const newsSchema = new mongoose.Schema({
    source: {
        id: String,
        name: String,
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date,
    content: String,
});

// Create model
const News = mongoose.model('News', newsSchema);

module.exports = News;