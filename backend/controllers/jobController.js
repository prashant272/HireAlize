const Job = require('../models/Job');

// Get all active jobs
exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({ active: true }).sort({ createdAt: -1 });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error: error.message });
    }
};

// Create a new job
exports.createJob = async (req, res) => {
    try {
        const newJob = await Job.create(req.body);
        res.status(201).json({ success: true, job: newJob });
    } catch (error) {
        res.status(500).json({ message: 'Error creating job', error: error.message });
    }
};

// Get a single job
exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job', error: error.message });
    }
};

// Update a job
exports.updateJob = async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after', runValidators: true });
        if (!updatedJob) return res.status(404).json({ message: 'Job not found' });
        res.status(200).json({ success: true, job: updatedJob });
    } catch (error) {
        res.status(500).json({ message: 'Error updating job', error: error.message });
    }
};

// Delete a job
exports.deleteJob = async (req, res) => {
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id);
        if (!deletedJob) return res.status(404).json({ message: 'Job not found' });
        res.status(200).json({ success: true, message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error: error.message });
    }
};
