function returnToBoundaryCount(nums){
    let x = 0;
    let ans = 0;
    for (let i = 0; i < nums.length; i++){
        x += nums[i];
        if (x === 0){
            ans++;
        }
    }
    return ans;
}