function differenceOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
      sum += i; 
    }
    let squareOfSum = sum * sum;
    let sumOfSquares = 0;
    for (let i = 1; i <= n; i++){
      sumOfSquares += i * i;
    }
    return squareOfSum - sumOfSquares;
  }