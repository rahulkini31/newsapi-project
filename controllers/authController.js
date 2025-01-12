const User = require('../models/User');
const History = require('../models/historyModels');  // Import History model
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register function (Optional: You can add registration logic if needed)
const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const user = new User({
            name,
            email,
            password: await bcrypt.hash(password, 10), // Hash the password before saving
        });

        await user.save();

        // Return a success message
        res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Login function
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if password matches
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate auth token
        const token = user.generateAuthToken();

        // Log the login event in history
        const action = 'login';
        const data = {
            ip: req.ip,  // Capture the IP address of the user
            device: req.headers['user-agent'],  // Capture the user-agent (device/browser info)
        };

        const historyEntry = new History({
            userId: user._id,
            action,
            data,
        });

        await historyEntry.save();  // Save history entry to MongoDB

        res.json({ message: 'Login successful', token });
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Export functions
module.exports = {
    register,
    login,
};