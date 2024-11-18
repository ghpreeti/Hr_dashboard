const mongoose = require('mongoose');

const hrSchema = new mongoose.Schema({
    name: { type: String, required: true },
    companyName: { type: String, required: true },
    companyWebsite: { type: String, required: true },
    hrIdProof: { type: String, required: true },
    subscriptionPlan: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Hr', hrSchema);
