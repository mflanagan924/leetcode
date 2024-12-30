function countzero(s){
    let ans = 0;
    let oneZero = ["a", "b", "d", "e", "g", "o", "p", "q", "0", "6", "9", "D", "O", "P", "Q", "R"];
    let twoZero = ["%", "&", "B", "8"];
    for (let i = 0; i < s.length; i++){
      if (oneZero.indexOf(s[i]) >= 0){
        ans += 1;
      } else if (twoZero.indexOf(s[i]) >= 0){
        ans += 2;
      } else if (s[i] === "(" && s[i + 1] === ")"){
        ans += 1;
        i++;
      }
    }
    return ans;
  }