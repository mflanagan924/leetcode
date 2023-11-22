function maximumStrongPairXor(nums){
    //initialize final answer
    let max = 0;
    //double for loop to check every pair
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            //checks |x - y| <= min(x, y)
            if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])){
                //checks if the XOR is greater than max value
                if ((nums[i] ^ nums[j]) > max){
                    max = nums[i] ^ nums[j];
                }
            }
        }
    }
    return max;
}