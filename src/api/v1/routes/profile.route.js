const express = require('express');
const router = express.Router();

// Functionalities
const { getProfileSummary } = require('../controllers/profile.controller');

// Routes
router.route('/:username').get(getProfileSummary);

// Export router
module.exports = router;
