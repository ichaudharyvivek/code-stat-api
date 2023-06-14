const logger = require('../../../config/logger');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

const { userProblemsSolved } = require('../../../config/graphql/queries');
const fetchQuery = require('../utils/fetchQuery');

// @desc        Get profile overview
// @route       GET /api/v1/leetcode/code/:username
// @access      Public
exports.getCodeSummary = asyncHandler(async (req, res, next) => {
  const { username } = req.params;

  // Return if username is not provided
  if (!username) {
    return next(new ErrorResponse('Please provide a valid username.', 400));
  }

  const userProblemsSolvedData = await fetchQuery(
    process.env.LEETCODE_API,
    userProblemsSolved,
    {
      username,
    }
  );

  // Return if user not found
  if (!userProblemsSolvedData || !userProblemsSolvedData.matchedUser) {
    return next(new ErrorResponse('User not found. Please check again.', 404));
  }

  // Send data
  logger.info('Successfully fetched code data.');
  res.status(200).json({ success: true, data: userProblemsSolvedData });
});
