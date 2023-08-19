const formatData = (userProblemsSolvedData, userContestRankingInfoData) => {
  const data = {};
  const solvedQuesList = userProblemsSolvedData.matchedUser.submitStatsGlobal.acSubmissionNum; // prettier-ignore
  const totalQuesList = userProblemsSolvedData.allQuestionsCount;

  // 1. Add ratings
  data.rating = userContestRankingInfoData.userContestRanking.rating;

  // 2. Cumulative data of question solved
  data.all = {
    solved: solvedQuesList[0].count,
    total: totalQuesList[0].count,
  };

  // 3. Easy problems solved
  data.easy = {
    solved: solvedQuesList[1].count,
    total: totalQuesList[1].count,
  };

  // 4. Medium problems solved
  data.medium = {
    solved: solvedQuesList[2].count,
    total: totalQuesList[2].count,
  };

  // 5. Hard problems solved
  data.hard = {
    solved: solvedQuesList[3].count,
    total: totalQuesList[3].count,
  };

  return data;
};

module.exports = formatData;

/*
NOTE: RESPONSE STRUCTURE
	data: {
		ranking,
		all:{
			solved,
			total
		}
		easy:{
			solved,
			total
		}
		medium:{
			solved,
			total
		}
		hard:{
			solved,
			total
		}	
	}
*/
