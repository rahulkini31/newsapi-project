const axios = require('axios');

// Top Headlines - Get headlines from a specific country or category
const getTopHeadlines = async (req, res) => {
    const {
        country,
        category,
        sources,
        excludeDomains,
        query,
        pageSize = 20,
        page = 1
    } = req.query;  // Extract query parameters

    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country,
                category,
                sources,
                excludeDomains,
                q: query,
                pageSize,
                page,
                apiKey: req.apiKey,  // Injected by middleware
            },
        });

        res.status(200).json(response.data.articles);
    } catch (error) {
        console.error('Error fetching top headlines:', error.message);
        res.status(500).json({ error: 'Failed to fetch top headlines' });
    }
};

// Search News - Search for articles using a query
const searchNews = async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required for searching' });
    }

    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: query,
                apiKey: req.apiKey,  // Injected by middleware
            },
        });

        res.status(200).json(response.data.articles);
    } catch (error) {
        console.error('Error searching news:', error.message);
        res.status(500).json({ error: 'Failed to search news' });
    }
};

// Everything - Search through all articles with advanced filters
const getEverything = async (req, res) => {
    const {
        query, 
        sources, 
        domains, 
        excludeDomains, 
        from, 
        to, 
        language = 'en', 
        sortBy = 'publishedAt', 
        pageSize = 20, 
        page = 1
    } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required for searching' });
    }

    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: query,
                sources,
                domains,
                excludeDomains,
                from,
                to,
                language,
                sortBy,
                pageSize,
                page,
                apiKey: req.apiKey,  // Injected by middleware
            },
        });

        res.status(200).json(response.data.articles);
    } catch (error) {
        console.error('Error fetching articles:', error.message);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
};

// Sources - Get a list of all news sources
const getSources = async (req, res) => {
    const { country, language, category } = req.query;

    try {
        const response = await axios.get('https://newsapi.org/v2/sources', {
            params: {
                country,
                language,
                category,
                apiKey: req.apiKey,  // Injected by middleware
            },
        });

        res.status(200).json(response.data.sources);
    } catch (error) {
        console.error('Error fetching sources:', error.message);
        res.status(500).json({ error: 'Failed to fetch sources' });
    }
};

module.exports = { getTopHeadlines, searchNews, getEverything, getSources };