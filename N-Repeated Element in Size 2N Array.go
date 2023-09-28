package main

import "sort"

func repeatedNTimes(nums []int) int {
	//sort nums array in ascending order
	sort.Ints(nums)
	//for loop to find the repeated number, each number only appears once so any number that appears more than once is the element that is repeated n times
	for i := 0; i < len(nums); i++ {
		if nums[i] == nums[i+1] {
			return nums[i]
		}
	}
	// If no repeated element is found, return -1 or an appropriate value.
	return -1
}
