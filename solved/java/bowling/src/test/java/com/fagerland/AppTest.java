package com.fagerland;


import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * Unit test for simple App.
 */
public class AppTest {

    @Test
    public void testApp() {
        assertTrue(true);
    }

    @Test
    public void testAllMiss() {
        List<Integer> scoreList = getScoreList(0, 20);

        int score = Bowling.calcScore(scoreList);
        int expectedScore = 0;
        assertEquals(score, expectedScore);
    }

    @Test
    public void testAllOnes() {
        List<Integer> scoreList = getScoreList(1, 20);

        int score = Bowling.calcScore(scoreList);
        int expectedScore = 20;
        assertEquals(score, expectedScore);
    }

    @Test
    public void testSplitAllOnes() {
        List<Integer> scoreList = getScoreList(1, 20);
        scoreList.set(0, 5);
        scoreList.set(1, 5);

        int score = Bowling.calcScore(scoreList);
        int expectedScore = 10 + 1 + 18;
        assertEquals(expectedScore, score);
    }

    @Test
    public void testStrikeAllOnes() {
        List<Integer> scoreList = getScoreList(1, 19);
        scoreList.set(0, 10);

        int score = Bowling.calcScore(scoreList);
        int expectedScore = 10 + 2 + 18;
        assertEquals(expectedScore, score);
    }

    @Test
    public void testAllStrikes() {
        List<Integer> scoreList = getScoreList(10, 12);

        int score = Bowling.calcScore(scoreList);
        int expectedScore = 300;
        assertEquals(expectedScore, score);
    }


    public List<Integer> getScoreList(int numPins, int numThrows) {
        List<Integer> scoreList = new ArrayList<>();
        for (int i = 0; i < numThrows; i++) {
            scoreList.add(numPins);
        }
        return scoreList;
    }


}
