function maxScore(nums){
    //sort in descending order
    nums.sort(function(a, b) {
  return b - a;
});
    //store running total
    let arr = [];
    //store running total
    let total = 0;
    //initialize answer
    let ans = 0;
    //for loop to find score of nums which is thenumber of positive integers in the array prefix
    for (let i = 0; i < nums.length; i++){
        total += nums[i];
        if (total > 0){
            ans += 1;
        }
    }
    return ans;
}