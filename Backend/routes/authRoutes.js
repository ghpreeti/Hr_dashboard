const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Hr = require('../models/Hr');
const upload = require('../middleware/fileUpload');

const router = express.Router();

// Sign Up
router.post('/signup', upload.single('hrIdProof'), async (req, res) => {
    const { name, companyName, companyWebsite, subscriptionPlan, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const hr = new Hr({
            name,
            companyName,
            companyWebsite,
            subscriptionPlan,
            hrIdProof: req.file.path,
            password: hashedPassword
        });
        await hr.save();
        res.status(201).json({ message: 'HR registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering HR', error });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { companyName, password } = req.body;

    try {
        const hr = await Hr.findOne({ companyName });
        if (!hr) return res.status(404).json({ message: 'HR not found' });

        const isMatch = await bcrypt.compare(password, hr.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: hr._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

module.exports = router;
