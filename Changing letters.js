function swap (string) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let ans = "";
    for (let i = 0; i < string.length; i++){
      if (vowel.indexOf(string[i]) >= 0){
        ans += string[i].toUpperCase();
      } else {
        ans += string[i];
      }
    }
    return ans;
  }