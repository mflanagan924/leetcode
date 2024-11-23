function maxProduct(numbers, size){
    numbers = numbers.sort(function (a, b) {  return b - a;  });
    let ans = 1;
    for (let i = 0; i < size; i++){
      ans *= numbers[i];
    }
    return ans;
  }