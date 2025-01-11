const User = require('../models/User');

// Get user profile (protected route)
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.json({ email: user.email });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

// Update user profile (protected route)
const updateUserProfile = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findById(req.user._id);
        if (email) user.email = email;
        if (password) user.password = password;

        await user.save();
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getUserProfile, updateUserProfile };