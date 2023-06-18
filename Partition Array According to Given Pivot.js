function pivotArray(nums, pivot){
    //empty array to store answer
    let ans = [];
    //for loop to find all numbers lower than pivot
    for (let i = 0; i < nums.length; i++){
        if (nums[i] < pivot){
            ans.push(nums[i]);
        }
    }
    //for loop to find all numbers equal to pivot
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === pivot){
            ans.push(nums[i]);
        }
    }
    //for loop to find all numbers greater than pivot
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > pivot){
            ans.push(nums[i]);
        }
    }
    return ans;
}