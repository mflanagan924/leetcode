function minimumSum(nums){
    //intialize array to store mountain triplets
    let ans = [];
    //for loop to find the mountain triplets i < j < k & nums[i] < nums[j] and nums[k] < nums[j] and return their sum
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            for (let k = j + 1; k < nums.length; k++){
                if (nums[i] < nums[j] && nums[k] < nums[j]){
                    ans.push(nums[i] + nums[j] + nums[k]);
                }
            }
        }
    }
    //if no mountain triplets
    if (ans.length === 0){
        return -1;
    }
    //find minimum
    return Math.min(...ans);
}