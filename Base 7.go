package main

import "strconv"

//In this code, we use strconv.FormatInt() to convert the num integer to a string representation in base 7. We need to cast num to int64 because FormatInt() expects a value of type int64.
func convertToBase7(num int) string {
	return strconv.FormatInt(int64(num), 7)
}
