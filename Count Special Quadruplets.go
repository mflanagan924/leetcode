package main

func countQuadruplets(nums []int) int {
	ans := 0
	for a := 0; a < len(nums); a++ {
		for b := a + 1; b < len(nums); b++ {
			for c := b + 1; c < len(nums); c++ {
				for d := c + 1; d < len(nums); d++ {
					if nums[a]+nums[b]+nums[c] == nums[d] {
						ans += 1
					}
				}
			}
		}
	}
	return ans
}
