function checkOnesSegment(s){
    let oneCount = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i] === "1"){
            oneCount++;
        } else {
            break;
        }
    }
    let right = "";
    for (let i = oneCount; i < s.length; i++){
        right += s[i];
    }
    let zeroIndex = right.indexOf("0");
    let oneIndex = right.indexOf("1");
    if (zeroIndex < 0){
        return true;
    }
    if (zeroIndex < oneIndex){
        return false;
    }
    return true;
}