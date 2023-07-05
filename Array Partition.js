function arrayPairSum(nums){
    //sort nums array in ascending order
    nums.sort(function(a,b){return a-b});
    //initialize answer
    let ans = 0;
    //for loop to add all even index integers
    for (let i = 0; i < nums.length; i+=2){
        ans += nums[i];
    }
    //return the maximized sum
    return ans;
}