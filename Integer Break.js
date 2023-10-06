function integerBreak(n){
    //empty array to store integers
    let arr = [];
    //case when n = 2
    if (n === 2){
        return 1;
    }
    //case when n = 3
    if (n === 3){
        return 2;
    }
    //case when n%3 === 0 then multiple 3 n/3 times
    if (n%3 === 0){
        return 3**(n/3);
    }
    //while loop for cases when n >= 4, this maximizes the number of 3's and 2's
    while (n > 0){
        //checks if there are more than two 2's, if so substracts 3 from n and stores the 3
        if (n/2 > 2){
            n -= 3;
            arr.push(3);
        //checks if there is exactly two 2's, if so adds the two 2's to the array, and subtracts 4
        } else if (n/2 === 2){
            arr.push(2);
            arr.push(2);
            n -= 4;
        //checks if there is only one 2 left, if so subtracts that two (makes final n = 0) and adds to array
        } else if (n/2 === 1){
            arr.push(2);
            n -= 2;
        }
    }
    //initialize the answer
    let ans = 1;
    //for loop to get the maximum product
    for (let i = 0; i < arr.length; i++){
        ans *= arr[i];
    }
    return ans;
}