function minOperations(nums, k){
    let ans = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] < k){
            ans++;
        }
    }
    return ans;
}