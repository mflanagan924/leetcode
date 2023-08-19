package main

func judgeCircle(moves string) bool {
	finalPositionX := 0
	finalPositionY := 0
	for i := 0; i < len(moves); i++ {
		if moves[i] == 'U' {
			finalPositionY += 1
		} else if moves[i] == 'D' {
			finalPositionY -= 1
		} else if moves[i] == 'R' {
			finalPositionX += 1
		} else if moves[i] == 'L' {
			finalPositionX -= 1
		}
	}
	if finalPositionX == 0 && finalPositionY == 0 {
		return true
	}
	return false
}
