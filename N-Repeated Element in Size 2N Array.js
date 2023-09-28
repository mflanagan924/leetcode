function repeatedNTimes(nums){
    //sort in ascending order
    nums.sort(function (a, b) {  return a - b;  });
    //for loop to find the repeated number, each number only appears once so any number that appears more than once is the element that is repeated n times
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === nums[i + 1]){
            return nums[i];
        }
    }
}