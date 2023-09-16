function waysToSplitArray(nums){
    //find the sum of the array nums
    let sum = nums.reduce((partialSum, a) => partialSum + a, 0);
    //initialize answer
    let ans = 0;
    //initialize the prefix sum
    let prefix = 0;
    //for loop to check if the prefix is greater than or equal to the suffix
    for (let i = 0; i < nums.length - 1; i++){
        prefix += nums[i];
        sum -= nums[i];
        if (prefix >= sum){
            ans += 1;
        }
    }
    return ans;
}