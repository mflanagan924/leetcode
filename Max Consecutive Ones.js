function findMaxConsecutiveOnes(nums){
    let ans = 0;
    let arr = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 1){
            ans++;
        } else {
            arr.push(ans);
            ans = 0;
        }
    }
    arr.push(ans);
    return Math.max(...arr);
}