function longestAlternatingSubarray(nums, threshold){
    //empty array to store all subarrays
    const subarrays = [];
    //for loop to find all subarrays
    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            subarrays.push(nums.slice(start, end));
        }
    }
    //empty array to store sorting based on threshold
    let thresholdArr = [];
    //remove all subarrays that have item greater than threshold
    for (let i = 0; i < subarrays.length; i++){
        if (Math.max(...subarrays[i]) <= threshold){
            thresholdArr.push(subarrays[i]);
        }
    }
    //empty array to store sorting based on first number
    let firstNumArr = [];
    //remove all subarrays that doesn't pass nums[l] % 2 == 0 
    for (let i = 0; i < thresholdArr.length; i++){
        if (thresholdArr[i][0] % 2 === 0){
            firstNumArr.push(thresholdArr[i]);
        }
    }
    //empty array to store sorting based on even odd
    let evenOddArr = [];
    //for loop to remove all subarrays that to switch back and forth between even and odd
    for (let i = 0; i < firstNumArr.length; i++){
        let isEvenOdd = true;
        for (let j = 0; j < firstNumArr[i].length - 1; j++){
            
            if (firstNumArr[i][j] % 2 != firstNumArr[i][j + 1] % 2){
                isEvenOdd = true;
            } else {
                isEvenOdd = false;
                break;
            }
            
        }
        evenOddArr.push(isEvenOdd);
    }
    //intialize final answer
    let maxLength = 0;
    //for loop to check if the length of the subarray is greater than the maxLength
    for (let i = 0; i < firstNumArr.length; i++){
        if (evenOddArr[i] === true && firstNumArr[i].length > maxLength){
            maxLength = firstNumArr[i].length;
        }
    }
    return maxLength;
}