function minIncrementForUnique(nums){
    nums.sort(function (a, b) {  return a - b;  });
    let ans = 0;
    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i] >= nums[i+1]){
            let diff = Math.abs(nums[i] - nums[i+1]);
            nums[i+1] = nums[i] + 1;
            ans += diff + 1;
        }
    }
    return ans;
}