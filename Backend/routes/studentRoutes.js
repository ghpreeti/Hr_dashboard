const express = require('express');
const Job = require('../models/Job');
const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const protect = require('../middleware/authMiddleware');
const upload = require('../middleware/fileUpload');

const router = express.Router();

// Student Sign Up
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = new Student({ name, email, password: hashedPassword });
        await student.save();
        res.status(201).json({ message: 'Student registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering student', error });
    }
});

// Student Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const student = await Student.findOne({ email });
        if (!student) return res.status(404).json({ message: 'Student not found' });

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

// View All Jobs
router.get('/jobs', protect, async (req, res) => {
    try {
        const jobs = await Job.find().populate('hrId', 'companyName'); // Optionally populate HR details
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
});

// Apply to a Job
router.post('/jobs/:id/apply', protect, upload.single('resume'), async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });

        // Add candidate's resume path to the job
        job.candidates.push(req.file.path);
        await job.save();

        res.status(200).json({ message: 'Application submitted successfully', job });
    } catch (error) {
        res.status(500).json({ message: 'Error applying to job', error });
    }
});

module.exports = router;
