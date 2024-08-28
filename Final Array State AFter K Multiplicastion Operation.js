function getFinalState(nums, k, multiplier){
    while (k > 0){
        k--;
        let min = Math.min(...nums);
        let indexMin = nums.indexOf(min);
        nums[indexMin] =  nums[indexMin] * multiplier;
    }
    return nums;
}