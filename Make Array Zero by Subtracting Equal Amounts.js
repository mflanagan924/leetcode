function minimumOperations(nums){
    //find unique numbers in nums array
    let unique = [...new Set(nums)];
    //initialize answer
    let ans = 0;
    //The answer is the number of unique non-zero numbers in nums
    for (let i = 0; i < unique.length; i++){
        if (unique[i] !== 0){
            ans += 1;
        }
    }
    return ans;
}