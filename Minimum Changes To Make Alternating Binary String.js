function minOperations(s){
    let arrZero = s.split("");
    let zeroCount = 0;
    arrZero[0] = "0";
    if (s[0] === "1"){
        zeroCount++;
    }
    for (let i = 1; i < arrZero.length; i++){
        if (arrZero[i-1] === "0" && arrZero[i] === "0"){
            arrZero[i] = "1";
            zeroCount++;
        } else if (arrZero[i-1] === "1" && arrZero[i] === "1"){
            arrZero[i] = "0";
            zeroCount++;
        }
    }
    let arrOne = s.split("");
    let oneCount = 0;
    arrOne[0] = "1";
    if (s[0] === "0"){
        oneCount++;
    }
    for (let i = 1; i < arrOne.length; i++){
        if (arrOne[i-1] === "0" && arrOne[i] === "0"){
            arrOne[i] = "1";
            oneCount++;
        } else if (arrOne[i-1] === "1" && arrOne[i] === "1"){
            arrOne[i] = "0";
            oneCount++;
        }
    }
    return Math.min(zeroCount, oneCount);
}