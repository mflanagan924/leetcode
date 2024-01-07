function checkZeroOnes(s){
    let oneLength = 0;
    let zeroLength = 0;
    let zeroArr = [];
    let oneArr = [];
    for (let i = 0; i < s.length; i++){
        if (s[i] === "1"){
            oneLength++;
            zeroArr.push(zeroLength);
            zeroLength = 0;
        } else if (s[i] === "0"){
            zeroLength++;
            oneArr.push(oneLength);
            oneLength = 0;
    }}
    oneArr.push(oneLength);
    zeroArr.push(zeroLength);
    if (Math.max(...oneArr) > Math.max(...zeroArr)){
        return true;
    }
    return false;
}