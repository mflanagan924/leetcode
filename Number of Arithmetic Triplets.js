function arithmeticTriplets(nums, diff){
    //initialize answer
    let ans = 0;
    //for loop to check for i < j < k, nums[j] - nums[i] == diff, and nums[k] - nums[j] == diff.
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            for (let k = j + 1; k < nums.length; k++){
                if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff){
                    ans += 1;
                }
            }
        }
    }
    return ans;
}