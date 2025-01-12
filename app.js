// const express = require('express');
// const app = express();
// app.use(express.json());
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());


// const newsRoutes = require('./routes/newsRoutes');
// const authRoutes = require('./routes/authRoutes');
// // // Use the news routes
// app.use('/api/news', newsRoutes);
// // Use auth routes
// app.use('/api/auth', authRoutes);

// // Set up the API key for all routes as a middleware
// app.use((req, res, next) => {
//   req.apiKey = process.env.NEWS_API_KEY;
//   next();
// });

// module.exports = app;

const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const newsRoutes = require('./routes/newsRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/news', newsRoutes);

module.exports = app;