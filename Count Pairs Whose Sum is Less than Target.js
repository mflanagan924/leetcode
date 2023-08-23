function countPairs(nums, target){
    //initialize answer
    let ans = 0;
    //for loop to brute force check every pair to find pairs that are nums[i] + nums[j] < target
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] + nums[j] < target){
                ans += 1;
            }
        }
    }
    return ans;
}