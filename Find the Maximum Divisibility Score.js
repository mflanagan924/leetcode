function maxDivScore(nums, divisors){
    //empty array to store divisors and number of nums that are dividable by those divisors
    let arr = [];
    //empty array to store the number that are dividable
    let sumArr = [];
    //for loop to populate the above two arrays
    for (let i = 0; i < divisors.length; i++){
        let sum = 0;
        let smallArr = [];
        for (let j = 0; j < nums.length; j++){
            if (nums[j]%divisors[i] === 0){
                sum += 1;
            }
        }
        smallArr.push(divisors[i]);
        smallArr.push(sum);
        sumArr.push(sum);
        arr.push(smallArr);
    }
    //find the max sum
    let max = Math.max(...sumArr);
    //empty array to find all divisors that equal the max sum
    let ansArr = [];
    //for loop to populate the above array
    for (let i = 0; i < arr.length; i++){
        if (arr[i][1] === max){
            ansArr.push(arr[i][0]);
        }
    }
    //If there is more than one integer with the maximum score, return the minimum of them.
    return Math.min(...ansArr);
}