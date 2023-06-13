const ErrorResponse = require('../utils/errorResponse');
const logger = require('../../../config/logger');
const asyncHandler = require('../middleware/asyncHandler');

// @desc        Get profile overview
// @route       GET /api/v1/leetcode/profile/:username
// @access      Public
exports.getProfileSummary = asyncHandler(async (req, res, next) => {});
