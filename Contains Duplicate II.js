function containsNearbyDuplicate(nums, k){
    //for loop to check if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] == nums[j] && Math.abs(i - j) <= k){
                return true;
            }
        }
    }
    return false;
}