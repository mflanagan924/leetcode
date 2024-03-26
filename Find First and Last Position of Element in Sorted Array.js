function searchRange(nums, target){
    if (nums.indexOf(target) === -1){
        return [-1, -1];
    }
    let ans = [nums.indexOf(target)];
    let start = nums.indexOf(target);
    for (let i = start + 1; i < nums.length; i++){
        if (nums[i] === target){
            ans.push(i);
        }
    }
    return [ans[0], ans[ans.length - 1]];
}