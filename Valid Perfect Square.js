function isPerfectSquare(num){
    //edge case for 1
    if (num === 1){
        return true;
    }
    //for loop to check all numbers less than 1/2 of num
    for (let i = Math.floor(num/2); i > 0; i--){
        if (i*i === num){
            return true;
        }
    }
    return false;
}