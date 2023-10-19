function findKDistantIndices(nums, key, k){
    //empty array to store index
    let index = [];
    //for loop to find index of numbers in nums that equal key
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === key){
            index.push(i);
        }
    }
    //empty array to store answer
    let ans = [];
    //for loop to find j such that |i - j| <= k and nums[j] == key
    for (let i = 0; i < index.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (Math.abs(index[i] - j) <= k){
                ans.push(j);
            }
        }
    }
    //get unique answers
    let uniqueAns = [... new Set(ans)];
    return uniqueAns;
}