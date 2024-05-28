function duplicateNumbersXOR(nums){
    let arr = [];
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] === nums[j]){
                arr.push(nums[i]);
                break;
            }
        }
    }
    if (arr.length === 0){
        return 0;
    }
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++){
        ans ^= arr[i];
    }
    return ans;
}
