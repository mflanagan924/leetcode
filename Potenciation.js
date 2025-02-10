function power(x,y){
    if (x === 0 && y === 0){
      return 1;
    }
    if (y === 0){
      return 1;
    }
    let ans = x;
    while (y > 1){
      ans *= x;
      y--;
    }
    return ans;
  }