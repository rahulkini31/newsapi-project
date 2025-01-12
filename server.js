const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const mongoose = require('mongoose');
const createRedisClient = require('./config/redisClient'); // Import Redis client factory

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const newsRoutes = require('./routes/newsRoutes');
const historyRoutes = require('./routes/historyRoutes');  // Import the history routes

// Port and MongoDB URI setup
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/newsApp';

// Connect to Redis first
const redisClient = createRedisClient();

redisClient.connect()
    .then(() => {
        // console.log('Connected to Redis');
        
        // Connect to MongoDB after Redis is connected
        mongoose
            .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Connected to MongoDB');
                // Use routes after successful DB connection
                app.use('/api/auth', authRoutes);  // Auth routes (register, login, logout)
                app.use('/api/user', userRoutes);  // User routes (profile, update profile)
                app.use('/api/news', newsRoutes);  // News routes (top headlines, search, etc.)
                app.use('/api/history', historyRoutes);  // History routes (view user activity)
                
                // Start server after both Redis and MongoDB are connected
                app.listen(PORT, () => {
                    console.log(`Server is running on http://localhost:${PORT}`);
                });
            })
            .catch((err) => {
                console.error('Failed to connect to MongoDB:', err);
                process.exit(1);  // Exit the process if MongoDB connection fails
            });
    })
    .catch((err) => {
        console.error('Failed to connect to Redis:', err);
        process.exit(1);  // Exit the process if Redis connection fails
    });