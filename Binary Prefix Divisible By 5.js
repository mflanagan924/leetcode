function prefixesDivBy5(nums){
    //empty array to store string number values
    let arr = [];
    //for loop to make integers to strings
    for (let i = 0; i < nums.length; i++){
        arr.push(nums[i].toString());
    }
    //empty string
    let string = "";
    //for loop to create the string from subarray nums[0..i]
    for (let i = 0; i < arr.length; i++){
        string += arr[i];
        arr[i] = string;
    }
    //empty array to store the base-10 numbers
    let arrNum = [];
    //for loop to change binary to base-10 numbers
    for (let i = 0; i < arr.length; i++){
        arrNum.push(BigInt('0b' + arr[i]));
    }
    //empty string to store the answer
    let ans = [];
    //for loop to check if each number is divisible by 5
    for (let i = 0; i < arrNum.length; i++) {
    ans.push(arrNum[i] % 5n === 0n);
  }

    return ans;
}