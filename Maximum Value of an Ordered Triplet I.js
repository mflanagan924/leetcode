function maximumTripletValue(nums){
    //initialize answer
    let ans = 0;
    //3 nesteed for loops to check all triplets
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            for (let k = j + 1; k < nums.length; k++){
                if ((nums[i] - nums[j]) * nums[k] > ans){
                    ans = (nums[i] - nums[j]) * nums[k];
                }
            }
        }
    }
    return ans;
}