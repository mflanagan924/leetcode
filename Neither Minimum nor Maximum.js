function findNonMinOrMax(nums){
    //if array is length 2 then return -1 as there is no value that is neither the min nor max
    if (nums.length === 2){
        return -1;
    }
    //sort array in ascending order
    nums.sort(function(a, b) {
  return a - b;
});
    //define the minimum value
    let min = nums[0];
    //define the maximum value
    let max = nums[nums.length - 1];
    //empty array to store all values that are neither min nor max
    let arr = [];
    //for loop to find all values that are neither min nor max
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== min && nums[i] !== max){
            arr.push(nums[i]);
        }
    }
    //if there are no values in the arr that means that are no values that are neither min nor max
    if (arr.length === 0){
        return -1;
    }
    //else return the first value in the arr
    return arr[0];
}