function sumOfSquares(nums){
    //find length of nums array
    let length = nums.length;
    //intialize answer
    let ans = 0;
    //for loop to check if n % i == 0 in a 1-indexed integer array, if so sum of the squares of all special elements 
    for (let i = 0; i < nums.length; i++){
        if (length%(i+1) === 0){
            ans += nums[i]*nums[i];
        }
    }
    return ans;
}