function wiggleSort(nums){
    //sort nums array in ascending order
    nums.sort(function(a, b) {
  return a - b;
});
    //empty array to get all the lower numbers
    let lower = [];
    //empty array to get all the bigger numbers
    let upper = [];
    //for loop get all the lower numbers (make sure that it is either equal to upper numbers if the nums array is even or 1 more than upper numbers if nums array is odd)
    for (let i = 0; i < nums.length/2; i++){
        lower.push(nums[i]);
    }
    //sort the array in descending order
    lower.sort(function(a, b) {
  return b -  a;
});
    //for loop to get the upper numbers
    for (let i = lower.length; i < nums.length; i++){
        upper.push(nums[i]);
    }
    //sort the array in descending order
    upper.sort(function(a, b) {
  return b - a;
});
    //empty array to store the answer
    let ans = [];
    //for loop to place the numbers in th array in the following order: nums[0] < nums[1] > nums[2] < nums[3]....
    for (let i = 0; i < lower.length; i++){
        ans.push(lower[i]);
        ans.push(upper[i]);
    }
    //if the nums array is odd, remove the null value at the end
    if (nums.length%2 !== 0){
        ans.pop();
    }
    //for loop to reorder the nums array in place with the answer
    for (let i = 0; i < nums.length; i++){
        nums[i] = ans[i];
    }
    return nums;
}