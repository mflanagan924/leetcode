function match(usefulness, months) {
    let ans = 100* Math.pow((1-.15), months);
    let sum = usefulness.reduce((partialSum, a) => partialSum + a, 0);
    if (sum >= ans){
      return "Match!";
    }
    return "No match!";
  }