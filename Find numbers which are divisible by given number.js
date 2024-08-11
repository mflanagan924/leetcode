function divisibleBy(numbers, divisor){
    let ans = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
        ans.push(numbers[i]);
      }
    }
    return ans;
  }