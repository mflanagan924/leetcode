function maxOperations(nums){
    let score = nums[0] + nums[1];
    let count = 1;
    if (nums.length === 2){
        return count;
    }
    for (let i = 2; i < nums.length; i+=2){
        if (nums[i] + nums[i+1] === score){
            count++;
        } else{
            return count;
        }
    }
    return count;
}