const History = require('../models/historyModels'); // Correct filename

// Get history for a specific user
const getUserHistory = async (req, res) => {
    try {
        const userHistory = await History.find({ userId: req.params.userId });
        res.json(userHistory);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch user history' });
    }
};

module.exports = { getUserHistory };