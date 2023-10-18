function minAbsoluteDifference(nums, x){
    //initialize with big number
    let ans = Number.MAX_VALUE;
    //for loop to find the absolute differences where abs(i - j) >= x
    for (let i = 0; i < nums.length; i++){
        for (let j = i + x; j < nums.length; j++){
            if (Math.abs(nums[i] - nums[j]) < ans){
                ans = Math.abs(nums[i] - nums[j]);
            }
        }
    }
    //return the minimized absolute difference
    return ans;
}