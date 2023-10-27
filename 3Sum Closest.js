function threeSumClosest(nums, target){
    //initialize distance
    let big = Infinity;
    //initialize answer
    let ans;
    //triple for loop to check all 3 sums
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            for (let k = j + 1; k < nums.length; k++){
                //if the distance between target and 3 sum is less than big, than big changes to that new distance
                //at the same time ans becomes that 3 sum
                if (Math.abs(target - (nums[i] + nums[k] + nums[j])) < big){
                    big = Math.abs(target - (nums[i] + nums[k] + nums[j]));
                    ans = nums[i] + nums[k] + nums[j];
                }
                }
            }
        }
    return ans;
}