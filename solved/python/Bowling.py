DEFAULT_NUMBER_THROWS = 20

def game(score_list):
    score = 0
    index = 0
    for frame in range(0, 10, 1):
        if (score_list[index] == 10):
            score += 10 + score_list[index+1] + score_list[index+2]
            index-=1
        elif (score_list[index] + score_list[index+1]) == 10:
            score += 10 + score_list[index+2]
        else:
            score += score_list[index] + score_list[index+1]
        index += 2
    return score
