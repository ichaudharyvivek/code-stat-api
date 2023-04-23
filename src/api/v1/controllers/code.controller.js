const ErrorResponse = require('../utils/errorResponse');
const logger = require('../../../config/Logger');
const asyncHandler = require('../middleware/asyncHandler');

// @desc        Get profile overview
// @route       GET /api/v1/leetcode/profile/:username
// @access      Public
exports.getCodeSummary = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Fuck You!' });
});
