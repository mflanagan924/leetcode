function smaller(nums) {
    let ans = [];
    for (let i = 0; i < nums.length - 1; i++){
      let count = 0;
      for (let j = i + 1; j < nums.length; j++){
        if (nums[i] > nums[j]){
          count++;
        }
      }
      ans.push(count);
    }
    ans.push(0);
    return ans;
  }