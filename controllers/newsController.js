const axios = require('axios');

// Top Headlines - existing function
// Top Headlines - Get headlines from specific country or category
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

    const apiKey = req.apiKey;  // Get the API key from request object

    if (!country) {
        return res.status(400).json({ error: 'Country parameter is required' });
    }

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
                apiKey: apiKey,  // The API key to authenticate
            },
        });

        res.json(response.data.articles);
    } catch (error) {
        console.error('Error fetching top headlines:', error.message);
        res.status(500).json({ error: 'Failed to fetch top headlines' });
    }
};


// Search News - existing function
const searchNews = async (req, res) => {
    const { query } = req.query;
    const apiKey = req.apiKey;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required for searching' });
    }

    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: query,
                apiKey: apiKey,
            },
        });

        res.json(response.data.articles);
    } catch (error) {
        console.error('Error searching news:', error.message);
        res.status(500).json({ error: 'Failed to search news' });
    }
};

// Everything - Search through all articles
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
    } = req.query; // Extract query parameters

    const apiKey = req.apiKey;  // Get the API key from request object

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
                apiKey: apiKey,  // The API key to authenticate
            },
        });

        res.json(response.data.articles);
    } catch (error) {
        console.error('Error fetching articles:', error.message);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
};


// Sources - Get a list of all news sources
const getSources = async (req, res) => {
    const {
        country,
        language,
        category
    } = req.query;  // Extract query parameters

    const apiKey = req.apiKey;  // Get the API key from the request object

    try {
        const response = await axios.get('https://newsapi.org/v2/sources', {
            params: {
                country,
                language,
                category,
                apiKey: apiKey  // The API key to authenticate
            }
        });

        res.json(response.data.sources);
    } catch (error) {
        console.error('Error fetching sources:', error.message);
        res.status(500).json({ error: 'Failed to fetch sources' });
    }
};

module.exports = { getTopHeadlines, searchNews, getEverything, getSources };