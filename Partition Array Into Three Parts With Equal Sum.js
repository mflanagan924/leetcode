function canThreePartsEqualSum(arr){
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0){
            zeroCount++;
        }
    }
    let sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    if (sum%3 !== 0){
        return false;
    }
    if (sum === 0 && zeroCount === arr.length){
        return true;
    }
    let average = sum/3;
    let partSum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        partSum += arr[i]
        if (partSum === average){
            count += 1;
            partSum = 0;
        }
    }
    console.log(count)
    if (count >= 3){
        return true;
    }
    return false;
}