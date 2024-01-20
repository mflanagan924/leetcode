function findErrorNums(nums){
    let ans = [];
    let length = nums.length;
    nums.sort(function (a, b) {  return a - b;  });
    for (let i = 1; i < nums.length; i++){
        if (nums[i] === nums[i-1]){
            ans.push(nums[i]);
            nums.splice(i, 1);
            break;
        }
    }
    if (nums[nums.length-1] !== length){
        ans.push(length);
        return ans;
    }
    if (nums[0] !== 1){
        ans.push(1);
        return ans;
    }
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== nums[i+1] - 1){
            ans.push(nums[i] + 1);
            return ans;
        }
    }
    
}

