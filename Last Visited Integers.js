function lastVisitedIntegers(nums){
    let seen = [];
    let ans = [];
    let k = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > 0){
            seen.unshift(nums[i]);
            k = 0;
        } else if (nums[i] === -1){
            k++;
            if (k <= seen.length){
                ans.push(seen[k-1]);
            } else {
                ans.push(-1);
            }
        }
    }
    return ans;
}