const logger = require('../../../config/logger');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const { getProfileSummaryService } = require('../services/profile.service');

// @desc        Get profile overview
// @route       GET /api/v1/leetcode?username=<sting>&isDownload=<boolean>
// @access      Public
exports.getProfileSummary = asyncHandler(async (req, res, next) => {
  const { username } = req.query;
  if (!username) {
    return next(new ErrorResponse('Please provide a valid username.', 400));
  }

  const data = await getProfileSummaryService(username);
  if (data.error) {
    return next(new ErrorResponse(data.error, data.statusCode));
  }

  res.status(200).json({ success: true, data });
});
