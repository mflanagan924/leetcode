function minimumDifference(nums, k){
    //sort array in descending order
    nums.sort(function(a,b){return b-a});
    //empty array to store sliding window
    let arr = [];
    //for loop to get the slide window difference
    for (let i = 0; i < nums.length; i++){
        let high = nums[i];
        let low = nums[i+k-1];
        let answer = high - low;
        arr.push(answer);
    }
    //sort the differences in ascending order
    arr.sort(function(a,b){return a-b});
    //get the minimum difference
    return arr[0];
}