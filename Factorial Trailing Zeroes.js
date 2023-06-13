function trailingZeroes(n){
    //case when n = 0
    if (n === 0){
        return 0;
    //checks other cases
    } else {
        //set the factorial to 1 takes into account big numbers
        let result = BigInt(1);
        //for loop to get the factorial
        for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
        }
        //changes the factorial integer to string, splits it into array and reverses the array
        let textArr = result.toString().split("").reverse();
        //sets the count to zero
        let count = 0;
        //for loop to count the trailing zeros untili there is a none zero
        for (let i = 0; i < textArr.length; i++){
            if (textArr[i] === "0"){
                count += 1;
            } else if (textArr[i] !== "0"){
                return count;
            }
        }
    return count;
    }
}