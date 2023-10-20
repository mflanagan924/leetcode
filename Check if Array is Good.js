function isGood(nums){
    //find max valuse
    max = Math.max(...nums);
    //initialize base array
    let base = [];
    //populate base array
    for (let i = 1; i <= max; i++){
        base.push(i);
    }
    base.push(max);
    //sort nums array in ascending order
    nums.sort(function (a, b) {  return a - b;  });
    //check if base and nums array are equal
    if (base.length !== nums.length) {
        return false;
    }
    
    for (let i = 0; i < base.length; i++) {
        if (base[i] !== nums[i]) {
            return false;
        }
    }
    
    return true;
}