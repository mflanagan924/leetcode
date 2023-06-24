function maximizeSum(nums, k){
    //find max value
    let max = Math.max(...nums);
    //empty array to store m and m + 1 until k
    let arr = [];
    for (let i = 0; i < k; i++){
        arr.push(max);
        max += 1;
    }
    //initialize answer
    let ans = 0;
    //for loop to sum arr numbers
    for (let i = 0; i < arr.length; i++){
        ans += arr[i];
    }
    return ans;
}