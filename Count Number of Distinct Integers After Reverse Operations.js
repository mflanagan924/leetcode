function countDistinctIntegers(nums){
    //empty array to store reverse digits
    let arr = []
    //for loop to get the reverse digits
    for (let i = 0; i < nums.length; i++){
        let reverseNums = nums[i].toString().split("").reverse().join("");
        arr.push(+reverseNums);
    }
    //push the reverse digits into the original nums array
    for (let i = 0; i < arr.length; i++){
        nums.push(arr[i]);
    }
    //find the unique values
    let unique = [...new Set(nums)];
    //return the number of unique values
    return unique.length;
}