package main

func countOdds(low int, high int) int {
	//intialize answer
	ans := 0
	//for loop to check if each number is odd
	for i := low; i <= high; i++ {
		if i%2 > 0 {
			ans += 1
		}
	}
	return ans
}
