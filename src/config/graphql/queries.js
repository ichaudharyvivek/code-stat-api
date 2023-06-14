exports.userProblemsSolved = `
        query userProblemsSolved($username: String!) {
          allQuestionsCount {
              difficulty
              count
          }

          matchedUser(username: $username) {
              problemsSolvedBeatsStats {
                  difficulty
                  percentage
                  }

              submitStatsGlobal {
                  acSubmissionNum {
                      difficulty
                      count
                  }
              }
          }
        }
`;

exports.userContestRankingInfo = `
        query userContestRankingInfo($username: String!) {
            userContestRanking(username: $username) {
                attendedContestsCount
                rating
                globalRanking
                totalParticipants
                topPercentage
                badge {
                    name
                }
            }    
        }            
`;
