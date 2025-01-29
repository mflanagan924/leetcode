function correctPolishLetters (string) {
    let polish = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"];
    let abc = ["a", "c", "e", "l", "n", "o", "s", "z", "z"];
    let ans = "";
    for (let i = 0; i < string.length; i++){
      if (polish.indexOf(string[i]) >= 0){
        ans += abc[polish.indexOf(string[i])];
      } else {
        ans += string[i];
      }
    }
    return ans;
  }