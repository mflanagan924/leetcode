package main

func isAcronym(words []string, s string) bool {
	acronym := ""
	for i := 0; i < len(words); i++ {
		acronym += string(words[i][0])
	}
	if acronym == s {
		return true
	}
	return false
}
