const express = require('express');
const { getTopHeadlines, searchNews, getEverything, getSources } = require('../controllers/newsController');
const addApiKey = require('../middlewares/addApiKey'); // Import the middleware

const router = express.Router();

// Apply the middleware only to news routes that require the API key
router.get('/top-headlines', addApiKey, getTopHeadlines);
router.get('/search', addApiKey, searchNews);
router.get('/everything', addApiKey, getEverything);
router.get('/sources', addApiKey, getSources);

module.exports = router;