function cypher(string) {
    let upper = ["I", "R", "E", "A", "S", "G", "T", "B", "O"];
    let upperNum = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    let lower = ["l", "z", "e", "a", "s", "b", "t", "g", "o"];
    let lowerNum = [1, 2, 3, 4, 5, 6, 7, 9, 0];
    let ans = "";
    for (let i = 0; i < string.length; i++){
      if (upper.indexOf(string[i]) >= 0){
          let index = upper.indexOf(string[i]);
        ans += upperNum[index];
      } else if (lower.indexOf(string[i]) >= 0){
          let index = lower.indexOf(string[i]);
          ans += lowerNum[index];
      } else {
          ans += string[i];
      }
    }
    return ans;
  }