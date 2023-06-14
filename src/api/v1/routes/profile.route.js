const express = require('express');
const router = express.Router();

// Functionalities
const { getProfileSummary } = require('../controllers/profile.controller');

// Routes
router.route('/').get(getProfileSummary);

// Export router
module.exports = router;
