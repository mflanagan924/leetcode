function sumOfUnique(nums){
    //find unique numbers in nums array
    let unique = [... new Set(nums)];
    //empty array to store frequency
    let arr = [];
    //for loop to get the frequency of each unique number
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
    //initialize answer
    let ans = 0;
    //for loop to find the unique numbers that only appear once, and add it to the answer to get the sum of the unique numbers that only appear once
    for (let i = 0; i < arr.length; i++){
        if (arr[i][1] === 1){
            ans += arr[i][0];
        }
    }
    return ans;
}