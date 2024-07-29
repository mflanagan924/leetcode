function divisors(integer) {
    let ans = [];
    for (let i = 2; i < integer; i++){
      if (integer%i === 0){
        ans.push(i);
      }
    }
    if (ans.length === 0){
      return integer.toString( )+ " is prime";
    } else {
      return ans;
    }
  }