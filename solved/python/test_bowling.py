import unittest
from Bowling import game, DEFAULT_NUMBER_THROWS

class TestBowling(unittest.TestCase):

    def test_all_miss(self):
        score_list = [0]*DEFAULT_NUMBER_THROWS
        score = game(score_list)
        expected_score = 0
        self.assertEqual(score, expected_score)
    
    def test_all_ones(self):
        score_list = [1]*DEFAULT_NUMBER_THROWS
        score = game(score_list)
        expected_score = DEFAULT_NUMBER_THROWS*1
        self.assertEqual(score, expected_score)

    def test_split_and_twos(self):
        score_list = [5,5]
        twos_list = [2]*(DEFAULT_NUMBER_THROWS-2)
        score_list.extend(twos_list)
        score = game(score_list)
        expected_score = 10+2+(2*18)
        self.assertEqual(score, expected_score)

    def test_strike_and_twos(self):
        score_list = [10]
        twos_list = [2]*(DEFAULT_NUMBER_THROWS-2)
        score_list.extend(twos_list)
        score = game(score_list)
        expected_score = 10+2+2+(2*18)
        self.assertEqual(score, expected_score)

    def test_strike_all(self):
        score_list = [10]*12
        score = game(score_list)
        expected_score = 300
        self.assertEqual(score, expected_score)

    



if __name__ == "__main__":
    unittest.main()
