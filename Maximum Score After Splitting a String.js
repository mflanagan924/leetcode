function maxScore(s){
    let arrZero = [];
    let zero = 0;
    for (let i = 0; i < s.length - 1; i++){
        if (s[i] === "0"){
            zero++;
            arrZero.push(zero);
        } else {
            arrZero.push(zero);
        }
    }
    let oneCount = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i] === "1"){
            oneCount++;
        }
    }
    let arrOne = [];
    for (let i = 0; i < s.length-1; i++){
        if (s[i] === "1"){
            oneCount--;
            arrOne.push(oneCount);
        } else {
            arrOne.push(oneCount);
        }
    }
    let ansArr = [];
    for (let i = 0; i < arrZero.length; i++){
        ansArr.push(arrZero[i] + arrOne[i]);
    }
    return Math.max(...ansArr);
}