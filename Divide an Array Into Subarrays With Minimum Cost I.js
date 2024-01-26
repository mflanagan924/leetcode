function minimumCost(nums){
    let x = nums[0];
    nums.shift();
    let y = Math.min(...nums);
    let yIndex = nums.indexOf(y);
    nums.splice(yIndex, 1);
    let z = Math.min(...nums);
    let zIndex = nums.indexOf(z);
    nums.splice(zIndex, 1);
    return x + y + z;
}