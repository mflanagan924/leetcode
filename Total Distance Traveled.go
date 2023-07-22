package main

func distanceTraveled(mainTank int, additionalTank int) int {
	total := 0
	for mainTank >= 5 {
		total += 5
		mainTank -= 5
		if additionalTank > 0 {
			mainTank += 1
			additionalTank -= 1
		}
	}
	if mainTank < 5 {
		total += mainTank
		mainTank -= mainTank
	}
	return 10 * total
}
