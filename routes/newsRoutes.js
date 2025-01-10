const express = require('express');
const { getTopHeadlines, searchNews } = require('../controllers/newsController');

const router = express.Router();

// Define routes
router.get('/top-headlines', getTopHeadlines);
router.get('/search', searchNews);

module.exports = router;