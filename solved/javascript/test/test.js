const assert = require("assert");
const Bowling = require("../Bowling");

describe("Bowling", () => {
  it("should pass 2", () => {
    assert.equal(2, 2);
  });

  it("should all miss", () => {
    const scoreList = Array(20).fill(0);
    const score = Bowling.getScore(scoreList);
    const expectedScore = 0;
    assert.equal(expectedScore, score);
  });

  it("should all ones", () => {
    const scoreList = Array(20).fill(1);
    const score = Bowling.getScore(scoreList);
    const expectedScore = 20;
    assert.equal(expectedScore, score);
  });
  
  it("should split and all ones", () => {
    const scoreList = Array(20).fill(1);
    scoreList[0] = 5;
    scoreList[1] = 5;
    const score = Bowling.getScore(scoreList);
    const expectedScore = 10 + 1 + 18;
    assert.equal(expectedScore, score);
  });

  it("should strike and all ones", () => {
    const scoreList = Array(19).fill(1);
    scoreList[0] = 10;
    const score = Bowling.getScore(scoreList);
    const expectedScore = 10 + 2 + 18;
    assert.equal(expectedScore, score);
  });

  it("should all strike", () => {
      const scoreList = Array(12).fill(10);
      const score = Bowling.getScore(scoreList);
      const expectedScore = 300;
      assert.equal(expectedScore, score);
  })
});
