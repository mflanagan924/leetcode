function findMatrix(nums){
    //find all unique numbers
    let unique = [... new Set(nums)];
    //empty array to store numbers and their frequency
    let arr = [];
    for (let i = 0; i < unique.length; i++){
        let smallArr = [];
        let count = 0;
        for (let j = 0; j < nums.length; j++){
            if (unique[i] === nums[j]){
                count += 1;
            }
        }
        smallArr.push(unique[i]);
        smallArr.push(count);
        arr.push(smallArr);
    }
    //sorts in descending order based on frequency
    arr.sort(function(a, b) {
  return b[1] - a[1];
});
    //empty array to store the answer
    let ans = [];
    //for loop to populate the maximum 2D array
    for (let i = 0; i < arr[0][1]; i++){
        let innerArr = [];
        innerArr.push(arr[0][0]);
        ans.push(innerArr);
    }
    //for loop to find any numbers that only appear once and push it into to index 0 of the 2D array
    for (let i = 1; i < arr.length; i++){
        if (arr[i][1] === 1){
            ans[0].push(arr[i][0]);
        } 
    }
    //for loop to find numbers that appear more than once and populate all of the appropriate 2D arrays
    for (let i = 1; i < arr.length; i++){
        if (arr[i][1] > 1){
            for (let j = 0; j < arr[i][1]; j++){
                ans[j].push(arr[i][0]);
            }
        }
    }
    return ans;
}