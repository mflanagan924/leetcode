function countPairs(nums, k){
    //intialize answer
    let ans = 0;
    //double for loop to check for number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] == nums[j] && (i*j)%k === 0){
                ans += 1;
            }
        }
    }
    return ans;
}