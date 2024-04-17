function solve(arr) {
    arr.reverse();
    let unique = [...new Set(arr)];
    return unique.reverse();
  }