def poker(hands):
    "return the best hand: poker([hand,...]) => hand"
    return max(hands, key=hand_rank)

def hand_rank(hand):
    """return a value indicating the ranking of a hand"""
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
    return "tests pass"