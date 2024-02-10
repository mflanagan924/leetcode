function countSubstrings(s){
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
        let isPalindrome = true;
        for (let k = i, l = j - 1; k < l; k++, l--) {
                if (s[k] !== s[l]) {
                    isPalindrome = false;
                    break;
                }
            }
            if (isPalindrome) {
                ans++;
            }
    }
  }
  return ans;
}

