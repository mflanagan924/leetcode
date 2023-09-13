function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (Math.abs(i - j) <= indexDiff && Math.abs(nums[i] - nums[j]) <= valueDiff){
                return true;
            }
        }
    }
    return false;
}