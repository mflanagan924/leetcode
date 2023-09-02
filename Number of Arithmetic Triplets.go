package main

func arithmeticTriplets(nums []int, diff int) int {
	ans := 0
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			for k := j + 1; k < len(nums); k++ {
				if nums[j]-nums[i] == diff && nums[k]-nums[j] == diff {
					ans += 1
				}
			}
		}
	}
	return ans
}
