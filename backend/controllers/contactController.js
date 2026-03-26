const Contact = require('../models/Contact');

// Submit a contact form
exports.submitContact = async (req, res) => {
    try {
        const { name, email, phone, message, type, source } = req.body;
        const resumeUrl = req.file ? (req.file.location || req.file.path) : null;
        
        const newContact = await Contact.create({ 
            name, 
            email, 
            phone, 
            message, 
            type: type || 'Employer',
            resumeUrl,
            source: source || 'Contact Page'
        });
        
        res.status(201).json({ success: true, message: 'Message sent successfully', contact: newContact });
    } catch (error) {
        console.error('Submit Contact Error:', error);
        res.status(500).json({ message: 'Error submitting contact form', error: error.message });
    }
};

// Get all contacts (for admin)
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts', error: error.message });
    }
};
