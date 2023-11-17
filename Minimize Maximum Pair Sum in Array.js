function minPairSum(nums){
    //sort nums array in descending order
    let max = nums.sort(function (a, b) {  return b - a;  });
    //empty array to store max values
    let maxArr = [];
    //for loop to get max values (nums.length/2)
    for (let i = 0; i < max.length/2; i++){
        maxArr.push(max[i]);
    }
    //sort nums array in ascending order
    let min = nums.sort(function (a, b) {  return a - b;  });
    //empty array to store min values
    let minArr = [];
    //for loop to get min values (nums.length/2)
    for (let i = 0; i < min.length/2; i++){
        minArr.push(min[i]);
    }
    //empty array to store the pair sum
    let pairSumArr = [];
    //for loop to get the minimized pair sum
    for (let i = 0; i < maxArr.length; i++){
        pairSumArr.push(maxArr[i] + minArr[i]);
    }
    //find the maximum pair sum value
    return Math.max(...pairSumArr);
}