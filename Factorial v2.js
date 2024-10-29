function factorial(n){
    let ans = 1;
    if (n === 0){
      return ans;
    }
    while (n > 0){
      ans *= n;
      n--;
    }
    return ans;
  }