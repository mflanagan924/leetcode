package main

import (
	"math"
)

func totalMoney(n int) int {
	//get the weeks
	weeks := int(math.Ceil(float64(n) / 7))
	//intialize answer
	start := 0
	//initialize the floating end
	x := 0
	//for loop to get the total
	for i := 1; i <= weeks; i++ {
		x += 1
		for j := i; j < 7+x; j++ {
			if n > 0 {
				start += j
				n -= 1
			}
		}
	}
	return start
}
