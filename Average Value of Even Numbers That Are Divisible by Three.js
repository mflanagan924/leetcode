function averageValue(nums) {
    //empty array to store numbers
    let arr = [];
    //find all number that are both even and divisible by 3
    for (let i = 0 ; i < nums.length; i++){
        if (nums[i]%2 === 0 && nums[i]%3 === 0){
            arr.push(nums[i]);
        }
    }
    //initialize sum
    let sum = 0;
    //for loop to get the sum of all numbers that are both even and divisible by 3
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    //return 0 if no numbers are found that are both even and divisible by 3
    if (arr.length === 0){
        return 0;
    }
    //return the average of all numbers that are both even and divisible by 3 rounded down to nearest integer
    return Math.floor(sum/arr.length);
}