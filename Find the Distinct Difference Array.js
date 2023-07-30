function distinctDifferenceArray(nums){
    //empty array to store each prefix and suffix
    let arr = [];
    //for loop to get each prefix and suffix
    for (let i = 0; i < nums.length; i++){
        let smallArr = [];
        let prefix = nums.slice(0, i+1);
        let suffix = nums.slice(i+1, nums.length);
        smallArr.push(prefix);
        smallArr.push(suffix);
        arr.push(smallArr);
    }
    //empty array to store the answer
    let ans = [];
    //for loop to find the length of all the unique elements in each prefix and suffix and subtract prefix-suffix
    for (let i = 0; i < arr.length; i++){
        let first = [... new Set(arr[i][0])];
        let second = [... new Set(arr[i][1])];
        ans.push(first.length - second.length);
    }
    return ans;
}