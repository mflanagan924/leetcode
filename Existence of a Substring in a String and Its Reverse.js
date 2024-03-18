function isSubstringPresent(s){
    //get reverse
    let reverse = s.split("").reverse().join("");
    const substrings = [];
    //find all substrings of length 2
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j++) {
        if (j === i + 2){
      substrings.push(s.slice(i, j));
        }
    }
  }
  //check if one of those substrings are in reverse
  for (let i = 0; i < substrings.length; i++){
      if (reverse.indexOf(substrings[i]) >= 0){
          return true;
      }
  }
  return false;
}