function semiOrderedPermutation(nums){
    //find index of 1
    let index1 = nums.indexOf(1);
    //find index of n
    let indexN = nums.indexOf(nums.length);
    //Let x be the position of 1 and y be the position of n. the answer is x + (n-y-1) if x < y and x + (n-y-1) - 1 if x > y
    if (index1 < indexN){
        return index1 + (nums.length - indexN - 1);
    } else {
        return index1 + (nums.length - indexN - 1) - 1;
    }
}