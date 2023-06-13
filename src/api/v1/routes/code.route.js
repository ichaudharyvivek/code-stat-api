const express = require('express');
const router = express.Router();

// Functionalities
const { getCodeSummary } = require('../controllers/code.controller');

// Routes
router.route('/').get(getCodeSummary);
router.route('/:username').get(getCodeSummary);

// Export router
module.exports = router;
