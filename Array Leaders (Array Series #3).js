function arrayLeaders(numbers){
    //get sum of array
    let sum = numbers.reduce((partialSum, a) => partialSum + a, 0);
    //empty array to store answer
    let ans = [];
    //for loop to check if current number is greater than sum of all numbers to its right
    for (let i = 0; i < numbers.length; i++){
      //does this by subtracting current number from sum
      sum -= numbers[i];
      //checks if that number is greater than the new sum
      if (numbers[i] > sum){
        //pushes number if it is greater
        ans.push(numbers[i]);
      }
    }
    return ans;
  }