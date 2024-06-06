function testit(s) {
    let lower = s.toLowerCase();
    let word = "";
    let count = 0;
  for (let i = 0; i < lower.length; i++){
      if (lower[i] === "w" && word.length === 0){
          word += lower[i];
      } else if (lower[i] === "o" && word.length === 1){
          word += lower[i];
      } else if (lower[i] === "r" && word.length === 2){
          word += lower[i];
      } else if (lower[i] === "d" && word.length === 3){
          word = "";
          count++;
      }
  }
  return count;
}