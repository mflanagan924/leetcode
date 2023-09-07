function countSymmetricIntegers(low, high){
    //empty array
    let arr = [];
    //for loop to find all numbers with even number of digits
    for (let i = low; i <= high; i++){
        let iString = i.toString();
        if (iString.length%2 === 0){
            arr.push(iString);
        }
    }
    //initialize answer
    let ans = 0;
    //for loop to convert each number to a string and compare the sum of the first half with that of the second.
    for (let i = 0; i < arr.length; i++){
        let first = arr[i].length/2;
        let sumFirst = 0;
        for (let j = 0; j < first; j++){
            sumFirst += +arr[i][j];
        }
        let sumSecond = 0;
        for (let k = first; k < arr[i].length; k++){
            sumSecond += +arr[i][k];
        }
        if (sumFirst === sumSecond){
            ans += 1;
        }
    }
    return ans;
}