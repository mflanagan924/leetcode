function numberOfPairs(nums){
    //find all unique numbers
    let unique = [... new Set(nums)];
    //empty array to store frequency of the unique numbers
    let arr = [];
    for (let i = 0; i < unique.length; i++){
        let ans = 0;
        for (let j = 0; j < nums.length; j++){
            if (unique[i] === nums[j]){
                ans += 1;
            }
        }
        arr.push(ans);
    }
    //initialize answer
    let answer = [0, 0];
    //for loop to return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.
    for (let i = 0; i < arr.length; i++){
        if (arr[i]%2 === 0){
            answer[0] += arr[i]/2;
        } else {
            answer[0] += Math.floor(arr[i]/2);
            answer[1] += arr[i]%2;
        }
    }
    return answer;
}