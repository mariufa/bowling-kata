export const postScore = (req, res) => {
  const scoreList = req.body.scoreList;
  const score = getScore(scoreList);
  return res.send({ score: score });
};

const getScore = scoreList => {
  let score = 0;
  let idx = 0;
  for (let i = 0; i < 10; i++) {
    if (scoreList[idx] == 10) {
      score += 10 + scoreList[idx + 1] + scoreList[idx + 2];
      idx--;
    } else if (scoreList[idx] + scoreList[idx + 1] == 10) {
      score += 10 + scoreList[idx + 2];
    } else {
      score += scoreList[idx] + scoreList[idx + 1];
    }
    idx += 2;
  }
  return score;
};
