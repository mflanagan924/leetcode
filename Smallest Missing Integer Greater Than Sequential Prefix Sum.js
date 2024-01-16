function missingInteger(nums){
    if (nums.length === 1){
        return nums[0] + 1;
    }
    let index = nums.length;
    for (let i = 1; i < nums.length; i++){
        if (nums[i] != nums[i - 1] + 1){
            index = i;
            break;
        }
    }
    let sum = 0;
    for (let i = 0; i < index; i++){
        sum += nums[i];    
    }
    while (nums.indexOf(sum) >= 0){
            sum++;
    }
    return sum;
}