const redis = require('redis');

let redisClient;

const createRedisClient = () => {
    if (!redisClient) {
        // Create Redis client only if it doesn't already exist
        redisClient = redis.createClient({
            url: process.env.REDIS_URL || 'redis://localhost:6379', // Default Redis URL
        });

        redisClient.on('connect', () => {
            console.log('Connected to Redis');
        });

        redisClient.on('error', (err) => {
            console.error('Redis error:', err);
        });
    }

    return redisClient;
};

module.exports = createRedisClient;