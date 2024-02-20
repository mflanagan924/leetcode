function singleNumber(nums){
    nums.sort(function (a, b) {  return a - b;  });
    console.log(nums)
    let count = 1;
    if (nums[0] !== nums[1]){
        return nums[0];
    }
    if (nums[nums.length-1] !== nums[nums.length-2]){
        return nums[nums.length-1];
    }
    for (let i = 1; i < nums.length; i++){
        if (nums[i] === nums[i-1]){
            count++;
        } else if (nums[i] !== nums[i-1] && count === 3){
            count = 1;
        } else if (nums[i] !== nums[i-1] && count < 3){
            return nums[i-1];
        }
    }
}