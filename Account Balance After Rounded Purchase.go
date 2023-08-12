package main

import (
	"math"
)

func accountBalanceAfterPurchase(purchaseAmount int) int {
	roundedAmount := math.Floor(float64((purchaseAmount+5)/10) * 10)
	return 100 - int(roundedAmount)
}
