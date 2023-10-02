package main

func maximumTripletValue(nums []int) int64 {
	ans := int64(0)
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			for k := j + 1; k < len(nums); k++ {
				current := int64(nums[i]-nums[j]) * int64(nums[k])
				if current > ans {
					ans = current // Update ans if current is greater
				}

			}
		}
	}
	return ans
}
