function numberGame(nums){
    nums.sort(function (a, b) {  return a - b;  });
    for (let i = 0; i < nums.length; i+=2){
        let second = nums[i];
        let first = nums[i+1];
        nums[i] = first;
        nums[i+1] = second;
    }
    return nums;
}