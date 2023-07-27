package main

func sumOfSquares(nums []int) int {
	length := len(nums)
	ans := 0
	for i := 0; i < len(nums); i++ {
		if length%(i+1) == 0 {
			ans += nums[i] * nums[i]
		}
	}
	return ans
}
