function unequalTriplets(nums){
    //initialize answer
    let ans = 0;
    //for loopt to check for 0 <= i < j < k < nums.length nums[i], nums[j], and nums[k] are pairwise distinct. In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            for (let k = j + 1; k < nums.length; k++){
                if (nums[i] != nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]){
                    ans += 1;
                }
            }
        }
    }
    return ans;
}