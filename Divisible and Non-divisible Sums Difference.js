function differenceOfSums(n, m){
    //empty array to store the range
    let range = [];
    //for loop to get the range from [1, n]
    for (let i = 1; i <= n; i++){
        range.push(i);
    }
    //initialize num1 and num2
    let num1 = 0;
    let num2 = 0;
    //for loop to add to num1 and num2
    for (let i = 0; i < range.length; i++){
        //if range[i] is not divisible by m
        if (range[i]%m > 0){
            num1 += range[i];
        //if range[i] is divisible by m
        } else {
            num2 += range[i];
        }
    }
    return num1-num2
}