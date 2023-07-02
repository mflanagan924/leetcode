function maximumDifference(nums){
    //empty array to store differences between to index
    let arr = [];
    //for loop to find the differences between two indexes as long as the j index number is greater than the i index number
    for (let i = 0; i < nums.length-1; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] < nums[j]){
                arr.push(nums[j] - nums[i]);
            } 
        }
    }
    //if there is no number that satisfies the above conditions (ie the array has length 0) return -1
    if (arr.length === 0){
        return -1;
    }
    //return the max difference
    return Math.max(...arr);
}