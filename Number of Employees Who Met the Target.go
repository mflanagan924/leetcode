package main

func numberOfEmployeesWhoMetTarget(hours []int, target int) int {
	ans := 0
	for i := 0; i < len(hours); i++ {
		if hours[i] >= target {
			ans += 1
		}
	}
	return ans
}
