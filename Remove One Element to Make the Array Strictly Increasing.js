function canBeIncreasing(nums){
    for (let i = 0; i < nums.length; i++){
        let check = Array.prototype.concat(nums.slice(0, i), nums.slice(i + 1, nums.length));
        if (check.length === 1){
            return true;
        }
        for (let j = 1; j < check.length; j++){
            if (check[j] <= check[j-1]){
                break;
            }
            if (j === check.length - 1){
            return true;
        }
        }
        
    }
    return false;
}
