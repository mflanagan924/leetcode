function sumOddLengthSubarrays(arr){
    //empty array to store all numbers from array that are part of an odd-length subarray
    let nums = [];
    //for loop to find all numbers in arr that are part of a odd-length subarray
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if ((i-j)%2 === 0){
                for (let k = i; k <= j; k++){
                    nums.push(arr[k]);
                }
            }
        }
    }
    //initialize answer
    let ans = 0;
    //for loop to sum all numbers in nums array
    for (let i = 0; i < nums.length; i++){
        ans += nums[i];
    }
    return ans;
}