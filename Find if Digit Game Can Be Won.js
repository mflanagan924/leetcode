function canAliceWin(nums){
    let total = nums.reduce((partialSum, a) => partialSum + a, 0);
    let single = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] < 10){
            single += nums[i];
        }
    }
    let double = total - single;
    if (double !== single){
        return true;
    } else {
        return false;
    }
}