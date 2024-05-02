function findMaxK(nums){
    nums.sort(function (a, b) {  return b - a;  });
    for (let i = 0; i < nums.length; i++){
        if (nums.indexOf(-nums[i]) > 0){
            return nums[i];
        }
    }
    return -1;
}
