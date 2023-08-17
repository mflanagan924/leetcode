package main

func balancedStringSplit(s string) int {
	balance := 0
	ans := 0
	for i := 0; i < len(s); i++ {
		if s[i] == 'L' {
			balance += 1
		} else {
			balance -= 1
		}
		if balance == 0 {
			ans += 1
		}
	}
	return ans
}
