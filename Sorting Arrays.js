function sortArray(a1, a2) {
    let first = [];
    for (let i = 0; i < a1.length; i++){
      first.push(a1[i][0]);
    }
    let ans = [];
    for (let i = 0; i < first.length; i++){
      for (let j = 0; j < a2.length; j++){
        if (first[i] === a2[j][0]){
          ans.push(a2[j]);
        }
      }
    }
    return ans;
  }