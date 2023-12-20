function pivotInteger(n){
    if (n === 1){
        return 1;
    }
    let arrForward = [];
    for (let i = 1; i <= n; i++){
        arrForward.push(i);
    }
    let arrForwardSum = [];
    let sum = 0;
    let sumBack = arrForward.reduce((partialSum, a) => partialSum + a, 0);
    for (let i = 0; i < arrForward.length; i++){
        let smallArr = [];
        sum += arrForward[i];
        sumBack -= arrForward[i];
        smallArr.push(sum);
        smallArr.push(sumBack);
        arrForwardSum.push(smallArr);
    }
    for (let i = 0; i < arrForwardSum.length-1; i++){
        if (arrForwardSum[i][1] === arrForwardSum[i+1][0]){
            return i+2;
        }
    }
    return -1;
}