function maxProductDifference(nums){
    //sort nums array in ascending order
      nums.sort(function(a, b) {
    return a - b;
  });
      //gets the max product from the two highest numbers
      let high = nums[nums.length - 1] * nums[nums.length - 2];
      //gets the min product form the two lowest numbers
      let low = nums[0] * nums[1];
      //return the max product difference
      return high - low;
  }