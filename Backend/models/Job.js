const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    hrId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hr', required: true },
    jobRole: { type: String, required: true },
    candidates: { type: [String] } // File paths of resumes
});

module.exports = mongoose.model('Job', jobSchema);
