package com.fagerland.javaapi;

import java.util.List;

public class Bowling {

    public static int getScore(List<Integer> scoreList) {
        int score = 0;
        int index = 0;
        for (int i = 0; i < 10; i++) {
            if (isStrike(scoreList, i)) {
                score += 10 + scoreList.get(index + 1) + scoreList.get(index + 2);
                index--;
            } else if (isSplit(scoreList, index)) {
                score += 10 + scoreList.get(index + 2);
            } else {
                score += scoreList.get(index) + scoreList.get(index + 1);
            }
            index += 2;
        }
        return score;
    }

    private static boolean isStrike(List<Integer> scoreList, int i) {
        return scoreList.get(i) == 10;
    }

    private static boolean isSplit(List<Integer> scoreList, int i) {
        return (scoreList.get(i) + scoreList.get(i + 1)) == 10;
    }
}
