function nextGreaterElements(nums){
    //double the nums array
    let numsDouble = [...nums];
    for (let i = 0; i < nums.length; i++){
        numsDouble.push(nums[i]);
    }
    //empty array to store final answer
    let ans = [];
    //for loop to compare nums and numsDouble array to find the next biggest
    for (let i = 0; i < nums.length; i++){
        for (let j = i; j < numsDouble.length; j++){
            //when j is the last and there was no bigger number push -1
            if (j === numsDouble.length - 1){
                ans.push(-1);
                }
            if (numsDouble[j] > nums[i]){
                ans.push(numsDouble[j]);
                break;
            } 
        }
    }
    return ans;
}