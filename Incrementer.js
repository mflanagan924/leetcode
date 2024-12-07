function incrementer(nums) { 
    let ans = [];
    let count = 1;
    for (let i = 0; i < nums.length; i++){
      let x = nums[i] + count;
      if (x > 9){
        x = x%10;
      }
      ans.push(x);
      count++;
    }
    return ans;
  }