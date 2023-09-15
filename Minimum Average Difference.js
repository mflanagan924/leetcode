function minimumAverageDifference(nums){
    //get the total sum
    let sum = nums.reduce((partialSum, a) => partialSum + a, 0);
    //get suffix sum, which starts out same of total sum
    let suffix = nums.reduce((partialSum, a) => partialSum + a, 0);
    //empty array to store average difference
    let arr = [];
    //initialize prefix length
    let prefixLength = 0;
    //initialize suffix length
    let suffixLength = nums.length;
    //initialize prefix sum
    let prefix = 0;
    //for loop to get the average difference at each index
    for (let i = 0; i < nums.length - 1; i++){
        prefixLength += 1;
        prefix += nums[i];
        suffixLength -= 1;
        suffix -= nums[i];
        let diff = Math.abs(Math.floor(prefix/prefixLength) - Math.floor(suffix/suffixLength));
        arr.push(diff);
    }
    //gets the last average difference
    arr.push(Math.floor(sum/nums.length));
    //finds index of minumum average difference
    return arr.indexOf(Math.min(...arr));
}