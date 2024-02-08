function numOfPairs(nums, target){
    let ans = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (i !== j){
                let sum = nums[i].concat(nums[j]);
                if (sum === target){
                    ans++;
                }
            }
        }
    }
    return ans;
}