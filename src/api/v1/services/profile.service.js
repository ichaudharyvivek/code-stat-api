const logger = require('../../../config/logger');
const asyncHandler = require('../middleware/asyncHandler');
const fetchQuery = require('../utils/fetchQuery');
const formatData = require('../utils/formatData');
const {
  userProblemsSolved,
  userContestRankingInfo,
} = require('../../../config/graphql/queries');
const ErrorResponse = require('../utils/errorResponse');

// @desc        Gives the summary of profile.
// @Param       username: string
// @Return      data: object
exports.getProfileSummaryService = asyncHandler(async (username) => {
  let data = {};

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

  if (!userProblemsSolvedData.matchedUser) {
    data.error = `Username '${username}' does not exists.`;
    data.statusCode = 404;
    return data;
  }

  // Format data according to requirements
  data = formatData(userProblemsSolvedData, userContestRankingInfoData);
  return data;
});
