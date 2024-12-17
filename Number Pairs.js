function getLargerNumbers(a, b) {
    let ans = [];
    for (let i = 0; i < a.length; i++){
      if (a[i] >= b[i]){
        ans.push(a[i]);
      } else {
        ans.push(b[i]);
      }
    }
    return ans;
  }