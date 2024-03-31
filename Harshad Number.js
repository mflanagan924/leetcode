function sumOfTheDigitsOfHarshadNumber(x){
    let arr = x.toString().split("");
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += +arr[i];
    }
    if (x%sum === 0){
        return sum;
    } else {
        return -1;
    }
}