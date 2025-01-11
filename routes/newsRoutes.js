const express = require('express');
const { getTopHeadlines, searchNews, getEverything, getSources } = require('../controllers/newsController');

const router = express.Router();

// Top headlines route
router.get('/top-headlines', getTopHeadlines);

// Search news route
router.get('/search', searchNews);

// Everything route - Search through all articles
router.get('/everything', getEverything);

// Sources route - Get news sources
router.get('/sources', getSources);

module.exports = router;