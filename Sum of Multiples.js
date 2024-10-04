function sumMul(n,m){
    if (n >= m){
      return "INVALID";
    }
    let x = n;
  let ans = 0;
    while (n < m){
      ans += n;
      n += x;
    }
    return ans;
  }