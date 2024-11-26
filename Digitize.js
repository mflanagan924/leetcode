function digitize(n) {
    let string = n.toString();
    let ans = [];
    for (let i = 0; i < string.length; i++){
      ans.push(+string[i]);
    }
  return ans;
  }