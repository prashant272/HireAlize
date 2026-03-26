const Subscriber = require('../models/Subscriber');

// Subscribe to newsletter
exports.subscribe = async (req, res) => {
    try {
        const { email } = req.body;
        
        // Check if exists
        const existing = await Subscriber.findOne({ email });
        if (existing) {
            return res.status(400).json({ success: false, message: 'Email is already subscribed' });
        }

        const newSubscriber = await Subscriber.create({ email });
        res.status(201).json({ success: true, message: 'Subscibed successfully', subscriber: newSubscriber });
    } catch (error) {
        res.status(500).json({ message: 'Error subscribing', error: error.message });
    }
};

// Get all subscribers (for admin)
exports.getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find().sort({ createdAt: -1 });
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subscribers', error: error.message });
    }
};
