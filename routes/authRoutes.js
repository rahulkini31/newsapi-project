const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Logout user
// router.post('/logout', logout);

module.exports = router;