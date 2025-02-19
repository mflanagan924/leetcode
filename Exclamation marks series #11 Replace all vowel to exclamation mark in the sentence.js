function replace(s) {
    let vowels = "aeiouAEIOU";
    let ans = "";
    for (let i = 0; i < s.length; i++){
      if (vowels.indexOf(s[i]) >= 0){
        ans += "!";
      } else {
        ans += s[i];
      }
    }
    return ans;
  }