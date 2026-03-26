const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: false },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    qualification: { type: String, required: false },
    experience: { type: String, required: false },
    resumeUrl: { type: String, required: false }, // Store S3 URL or local path
    status: { type: String, enum: ['Pending', 'Reviewed', 'Rejected', 'Hired'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
