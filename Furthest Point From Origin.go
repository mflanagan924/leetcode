package main

func furthestDistanceFromOrigin(moves string) int {
	lCount := 0
	rCount := 0
	_Count := 0
	for i := 0; i < len(moves); i++ {
		if moves[i] == 'L' {
			lCount += 1
		} else if moves[i] == 'R' {
			rCount += 1
		} else if moves[i] == '_' {
			_Count += 1
		}
	}
	if lCount == rCount {
		return _Count
	} else if lCount > rCount {
		return lCount - rCount + _Count
	} else if lCount < rCount {
		return rCount - lCount + _Count
	}
	return 0
}
