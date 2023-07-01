function longestSubarray(nums){
    //finds max number in nums array wich is the bitwise AND
    let maxNum = Math.max(...nums);
    //initializes count
    let count = 0;
    //empty array to store consecutive count of max number
    let arr = [];
    //for loop to push th subarray lengths equal to max number
    for (let i = 0; i <= nums.length; i++){
        if (nums[i] === maxNum){
            count += 1;
        } else if (nums[i] !== maxNum) {
            arr.push(count);
            count = 0;
        }
    }
    //return the length of max subarray
    return Math.max(...arr);
}