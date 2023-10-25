function xorOperation(n, start){
    //empty array to store nums
      let nums = [];
      //for loop to populate nums
      for (let i = 0; i < n; i++){
          let x = start + 2 * i;
          nums.push(x);
      }
      //intiailize final answer
      let result = 0;
      //for loop to return the bitwise XOR of all elements of nums
      for (let i = 0; i < nums.length; i++) {
      result ^= nums[i];
    }
    return result;
  }