function singleNumber(nums){
    let ans = [];
    for (let i = 0; i < nums.length; i++){
        if (ans.indexOf(nums[i]) < 0){
            let number = nums[i];
            if (nums.indexOf(number) === nums.lastIndexOf(nums[i])){
                ans.push(nums[i]);
            }
        }
    }
    return ans;
}