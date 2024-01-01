function hasTrailingZeros(nums){
    let arr = [];
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = i+1; j < nums.length; j++){
            let binary = (nums[i]^nums[j]).toString(2);
            if ((nums[i] | nums[j]).toString(2).endsWith("0")){
                return true;
            }
        }
    }
    return false;
}