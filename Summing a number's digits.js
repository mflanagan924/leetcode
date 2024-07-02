function sumDigits(number) {
    let y = Math.abs(number);        
    let x = y.toString().split("");
    let ans = 0;
    for (let i = 0; i < x.length; i++){
        ans += (+x[i]);
    }
    return ans;
  }