package main

import "math"

func myPow(x float64, n int) float64 {
	//convert n int to float64
	f := float64(n)
	//use the built in power function
	return math.Pow(x, f)
}
