function findDuplicates(nums){
    //sort nums array in ascending order
    let sortNums = nums.sort(function (a, b) {  return a - b;  });
    //empty array to store final answer
    let ans = [];
    //for loop to check if number at i is equal to number at i+1, if so push number at i and skip next number
    for (let i = 0; i < sortNums.length; i++){
        if (sortNums[i] === sortNums[i + 1]){
            ans.push(sortNums[i]);
            i++;
        }
    }
    return ans;
}