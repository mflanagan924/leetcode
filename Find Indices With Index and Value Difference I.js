function findIndices(nums, indexDifference, valueDifference){
    //intialize answer
    let ans = [];
    //double for loop to check all index pairs
    for (let i = 0; i < nums.length; i++){
        //this for loop accounts for abs(i - j) >= indexDifference
        for (let j = i + indexDifference; j < nums.length; j++){
            //if abs(nums[i] - nums[j]) >= valueDifference is true than pushes i and j and stops loop (this means it finds the first answer that is correct doesn't continue to check if there are other correct answers)
            if (Math.abs(nums[i] - nums[j]) >= valueDifference){
                ans.push(i);
                ans.push(j);
                break;
            }
        }
    }
    //case were no pair is good
    if (ans.length === 0){
        ans = [-1, -1];
    }
    return ans;
}