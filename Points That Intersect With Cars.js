function numberOfPoints(nums){
    //empty array to store numbers
    let arr = [];
    //for loop to populate the array with the range of numbers from nums
    for (let i = 0; i < nums.length; i++){
        for (let j = nums[i][0]; j <= nums[i][1]; j++){
            arr.push(j);    
        }
    }
    //find unique values
    let unique = [... new Set(arr)];
    //return the length
    return unique.length;
}