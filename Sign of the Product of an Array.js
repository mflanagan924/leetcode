function arraySign(nums){
    let negative = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            return 0;
        } else if (nums[i] < 0){
            negative += 1;
        }
    }
    if (negative%2 > 0){
        return -1;
    }
    return 1;
}