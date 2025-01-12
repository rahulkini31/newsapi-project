// const express = require('express');
// const { getUserHistory } = require('../controllers/historyController');
// const authMiddleware = require('../middlewares/authMiddleware');  // Import authentication middleware

// const router = express.Router();

// // Protected route to get user history
// router.get('/history', authMiddleware, getUserHistory);  // Use authMiddleware to protect the route

// module.exports = router;

const express = require('express');
const { getUserHistory } = require('../controllers/historyController');
const authMiddleware = require('../middlewares/authMiddleware');  // Import authentication middleware

const router = express.Router();

// Protected route to get user history for the authenticated user
router.get('/', authMiddleware, getUserHistory);  // Use authMiddleware to protect the route

module.exports = router;