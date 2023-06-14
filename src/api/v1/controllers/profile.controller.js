const ErrorResponse = require('../utils/errorResponse');
const logger = require('../../../config/logger');
const asyncHandler = require('../middleware/asyncHandler');

const {
  userProblemsSolved,
  userContestRankingInfo,
} = require('../../../config/graphql/queries');

const fetchQuery = require('../utils/fetchQuery');

// @desc        Get profile overview
// @route       GET /api/v1/leetcode/profile/:username
// @access      Public
exports.getProfileSummary = asyncHandler(async (req, res, next) => {
  const { username } = req.query;

  const userProblemsSolvedData = await fetchQuery(
    process.env.LEETCODE_API,
    userProblemsSolved,
    {
      username,
    }
  );

  const userContestRankingInfoData = await fetchQuery(
    process.env.LEETCODE_API,
    userContestRankingInfo,
    {
      username,
    }
  );

  res.status(200).json({ success: true });
});
