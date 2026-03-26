const Application = require('../models/Application');

// Submit job application
exports.submitApplication = async (req, res) => {
    try {
        const { jobId, fullName, email, phone, qualification, experience } = req.body;
        
        // Check for duplicate application
        let query = { email };
        if (jobId) {
            query.jobId = jobId;
        } else {
            query.jobId = { $exists: false }; // Or null depending on how it's stored, checking both logic
        }
        
        const existingApp = await Application.findOne({ email, jobId: jobId || null });
        if (existingApp) {
            return res.status(400).json({ success: false, message: 'You have already applied for this job.' });
        }

        // Handle file upload manually if needed or via multer in the route
        const resumeUrl = req.file ? req.file.location : null;
        console.log('--- NEW APPLICATION SUBMISSION ---');
        console.log('Resume Link:', resumeUrl);
        
        const newApp = await Application.create({
            jobId: jobId || null, fullName, email, phone, qualification, experience, resumeUrl
        });

        res.status(201).json({ success: true, message: 'Application submitted successfully', application: newApp });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting application', error: error.message });
    }
};

// Get all applications (for admin)
exports.getApplications = async (req, res) => {
    try {
        let sortOption = { createdAt: -1 }; // Default sort by newest first
        if (req.query.sort) {
            // e.g. ?sort=status to sort alphabetically by status
            // e.g. ?sort=oldest to sort by oldest first
            if (req.query.sort === 'status') {
                sortOption = { status: 1, createdAt: -1 };
            } else if (req.query.sort === 'oldest') {
                sortOption = { createdAt: 1 };
            }
        }
        
        const applications = await Application.find()
            .populate('jobId', 'title location type')
            .sort(sortOption);
            
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching applications', error: error.message });
    }
};

// Update application status
exports.updateApplicationStatus = async (req, res) => {
    try {
        const { status } = req.body;
        // Optionally validate status based on enum values: ['Pending', 'Reviewed', 'Rejected', 'Hired']
        const validStatuses = ['Pending', 'Reviewed', 'Rejected', 'Hired'];
        if (status && !validStatuses.includes(status)) {
            return res.status(400).json({ message: 'Invalid status value' });
        }

        const application = await Application.findByIdAndUpdate(
            req.params.id, 
            { status }, 
            { new: true, runValidators: true }
        ).populate('jobId', 'title');

        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        res.status(200).json({ success: true, message: 'Application status updated', application });
    } catch (error) {
        res.status(500).json({ message: 'Error updating application status', error: error.message });
    }
};

// Delete application
exports.deleteApplication = async (req, res) => {
    try {
        const application = await Application.findByIdAndDelete(req.params.id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json({ success: true, message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting application', error: error.message });
    }
};
