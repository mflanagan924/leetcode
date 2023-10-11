function reduce(nums, fn, init){
    //Declare a variable "res" and set it it equal to the initial value.
    let res = init;
    //Loop over each value in the array and set "res" = fn(res, arr[i]).
    for (let i = 0; i < nums.length; i++){
        res = fn(res, nums[i]);
    }
    return res;
}