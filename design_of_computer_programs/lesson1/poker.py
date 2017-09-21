def poker(hands):
    "return the best hand: poker([hand,...]) => hand"
    return max(hands, key=hand_rank)

def card_ranks(cards):
    '''Return a list of the ranks, sorted from greatest to least'''
    ranks = ['--23456789TJQKA'.index(r) for r, _ in cards]
    ranks.sort(reverse=True)
    return ranks

def straight(ranks):
    '''Return True if the ordered ranks form a 5-card straight'''
    return (max(ranks)-min(ranks) == 4) and len(set(ranks)) == 5

def flush(hand):
    '''Return True if all cards have the same suit'''
    return len(set([s for _, s in hand])) == 1 # if all elements are the same, set should reduce to 1



def hand_rank(hand):
    ##########
    # straight(ranks): returns True if the hand is a straight.
    # flush(hand):     returns True if the hand is a flush.
    # kind(n, ranks):  returns the first rank that the hand has
    #                  exactly n of. For A hand with 4 sevens 
    #                  this function would return 7.
    # two_pair(ranks): if there is a two pair, this function 
    #                  returns their corresponding ranks as a 
    #                  tuple. For example, a hand with 2 twos
    #                  and 2 fours would cause this function
    #                  to return (4, 2).
    # card_ranks(hand) returns an ORDERED list of the ranks 
    #                  in a hand (where the order goes from
    #                  highest to lowest rank). 
    ###########
    # 0 - 8 rank (7, 9, 5) > (7, 3, 2)
    # 7: rank(four of a kind),  four: 9's, one: 5
    #   is greater than 7: rank(four of a kind, four 3's, one: 2) 
    # straight flush (8, 11) # jack high
    # four of a kind (7, 14, 12) # four aces, one queen
    # full house (6, 8, 13) # three 8's, two kings
    # flush (5, [10, 8, 7, 5, 3]) # 10 high
    # straight(4, 11) # jack high
    # 3 of a kind (3, 7, [7,7,7,5,2])
    # 2 pairs (2, 11, 3, [13, 11,11,3,3]) # two pairs jacks and threes with a king
    # 2 of a kind (1, 2, [11,6,3,2,2])
    # nothing (0, 7,5,4,3,2)
    """return a value indicating the ranking of a hand"""
    ranks = card_ranks(hand)
    if straight(ranks) and flush(hand): # straight flush
        return (8, max(ranks)) 
    elif kind(4, ranks): # four of a kind
        return (7, kind(4, ranks), kind(1, ranks)) 
    elif kind(3, ranks) and kind(2, ranks): # fullhouse
        return (6, kind(3, ranks), kind(2,ranks))
    elif flush(hand): # flush
        return (5, ranks)
    elif straight(hand):
        return (4, max(ranks))
    elif kind(3, ranks):
        return (3, kind(3, ranks), ranks)
    elif two_pair(ranks):
        return (2, two_pair(ranks), ranks)
    elif kind(2, ranks):
        return (1, kind(2, ranks), ranks)
    else:
        return (0, ranks)

    

    pass
    # return 

def test():
    """Test cases for the functions in poker program"""
    sf = "6C 7C 8C 9C TC".split()
    fk = "9D 9H 9C 9S 7D".split()
    fh = "TD TC TH 7C 7D".split()
    assert poker([sf, fk, fh]) == sf
    assert poker([fk, fh]) == fk
    assert poker([fh, fk]) == fk
    assert poker([fh, fh]) == fh
    assert poker([sf]) == sf
    assert poker([fk]) == fk
    assert poker([fh]) == fh
    assert poker([sf] + 99*[fk]) == fk
    assert poker([sf] + 99*[fh]) == sf

    assert hand_rank(sf) == (8, 10)
    assert hand_rank(fk) == (7, 9, 7)
    assert hand_rank(fh) == (6, 10, 7)

    assert card_ranks(sf) == [10, 9, 8, 7, 6]
    assert card_ranks(fk) == [9, 9, 9, 9, 7]
    assert card_ranks(fh) == [10, 10, 10, 7, 7]

    assert straight([9,8,7,6,5]) == True
    assert straight([9,8,7,6,4]) == False

    assert flush(sf) == True
    assert flush(fh) == False
    
    return "tests pass"

print test()