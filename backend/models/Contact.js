const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ['Employer', 'Candidate'], default: 'Employer' },
    resumeUrl: { type: String, required: false }, // Optional resume for candidates
    source: { type: String, default: 'Contact Page' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
