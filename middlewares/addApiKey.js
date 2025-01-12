// Middleware to add the API key to the request object
const addApiKey = (req, res, next) => {
    if (!process.env.NEWS_API_KEY) {
        return res.status(500).json({ error: 'NEWS_API_KEY is not set in environment variables' });
    }
    req.apiKey = process.env.NEWS_API_KEY;
    next();
};

module.exports = addApiKey;