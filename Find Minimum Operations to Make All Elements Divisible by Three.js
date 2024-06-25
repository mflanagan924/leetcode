function minimumOperations(nums){
    let ans = 0;
    for (let i = 0; i < nums.length; i++){
        ans += Math.min(nums[i] % 3, 3 - (nums[i] % 3));
    }
    return ans;
}