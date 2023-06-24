function majorityElement(nums){
    //find all unique numbers in nums array
    let unique = [... new Set(nums)];
    //empty array to store frequency of each number
    let freq = [];
    //for loop to get the frequency
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
        freq.push(smallArr);
    }
    //define n
    let n = nums.length;
    //empty array to store final answer
    let ans = [];
    //for loop to find all numbers that appear more than n/3 times
    for (let i = 0; i < freq.length; i++){
        if (freq[i][1] > n/3){
            ans.push(freq[i][0]);
        }
    }
    return ans;
}