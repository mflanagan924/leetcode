function integrate(coefficient, exponent) {
    let second = exponent + 1;
    let first = coefficient/second;
    let ans = first.toString() +"x^"+ second.toString();
    return ans;
  }