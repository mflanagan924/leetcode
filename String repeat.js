function repeatStr (n, s) {
    let ans = ''
    while(n > 0){
      ans += s;
      n--;
    }
    return ans
  }