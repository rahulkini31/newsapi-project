const jwt = require('jsonwebtoken');

// Middleware to protect routes
module.exports = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from header
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token using the JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Use the secret from .env
        req.userId = decoded.userId;  // Attach userId to the request object
        next();  // Call next middleware/route handler
    } catch (err) {
        return res.status(400).json({ message: 'Invalid token' });
    }
};