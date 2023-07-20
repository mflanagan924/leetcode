package main

import (
	"math"
)

func averageValue(nums []int) int {
	arr := []int{}
	for i := 0; i < len(nums); i++ {
		if nums[i]%2 == 0 && nums[i]%3 == 0 {
			arr = append(arr, nums[i])
		}
	}
	sum := 0
	for i := 0; i < len(arr); i++ {
		sum += arr[i]
	}
	if len(arr) == 0 {
		return 0
	}
	average := float64(sum) / float64(len(arr))
	return int(math.Floor(average))
}
