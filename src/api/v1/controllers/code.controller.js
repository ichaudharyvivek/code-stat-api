const logger = require('../../../config/logger');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

const { getCodeStatsQuery } = require('../../../config/graphql/queries');

// @desc        Get profile overview
// @route       GET /api/v1/leetcode/code/:username
// @access      Public
exports.getCodeSummary = asyncHandler(async (req, res, next) => {
  const { username } = req.params;

  // Return if username is not provided
  if (!username) {
    return next(new ErrorResponse('Please provide a valid username.', 400));
  }

  // Fetch data from server
  const response = await fetch(process.env.LEETCODE_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: getCodeStatsQuery, variables: { username } }),
  });

  // Parse response
  const { data } = await response.json();

  // Return if user not found
  if (!data || !data.matchedUser) {
    return next(new ErrorResponse('User not found. Please check again.', 404));
  }

  // Send data
  logger.info('Successfully fetched code data.');
  res.status(200).json({ success: true, data });
});
