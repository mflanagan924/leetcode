package main

func countGoodTriplets(arr []int, a int, b int, c int) int {
	ans := 0
	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			for k := j + 1; k < len(arr); k++ {
				if float64(abs(arr[i]-arr[j])) <= float64(a) &&
					float64(abs(arr[j]-arr[k])) <= float64(b) &&
					float64(abs(arr[i]-arr[k])) <= float64(c) {
					ans++
				}
			}
		}
	}
	return ans
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
