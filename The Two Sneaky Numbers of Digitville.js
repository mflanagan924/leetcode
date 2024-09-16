function getSneakyNumbers(nums){
    nums = nums.sort(function (a, b) {  return a - b;  });
    let ans = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === nums[i+1]){
            ans.push(nums[i]);
            i++;
        }
    }
    return ans;
}