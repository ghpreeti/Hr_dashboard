const express = require('express');
const Job = require('../models/Job');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// Post a Job
router.post('/jobs', protect, async (req, res) => {
    const { jobRole } = req.body;

    try {
        const job = new Job({
            hrId: req.user.id, // Retrieved from the token
            jobRole,
        });
        await job.save();
        res.status(201).json({ message: 'Job posted successfully', job });
    } catch (error) {
        res.status(500).json({ message: 'Error posting job', error });
    }
});

// Get all Jobs by HR
router.get('/jobs', protect, async (req, res) => {
    try {
        const jobs = await Job.find({ hrId: req.user.id });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
});

// Delete a Job
router.delete('/jobs/:id', protect, async (req, res) => {
    try {
        const job = await Job.findOneAndDelete({ _id: req.params.id, hrId: req.user.id });
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error });
    }
});

// Add Candidates to a Job
router.post('/jobs/:id/candidates', protect, async (req, res) => {
    const { candidates } = req.body; // Candidates as an array of resume file paths
    try {
        const job = await Job.findOneAndUpdate(
            { _id: req.params.id, hrId: req.user.id },
            { $push: { candidates: { $each: candidates } } },
            { new: true }
        );

        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.status(200).json({ message: 'Candidates added successfully', job });
    } catch (error) {
        res.status(500).json({ message: 'Error adding candidates', error });
    }
});

module.exports = router;
