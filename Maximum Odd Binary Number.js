function maximumOddBinaryNumber(s){
    //initialize both the zero and one counts
    let zeroLength = 0;
    let oneLength = 0;
    //for loop to count the number of ones and zeros in the s string
    for (let i = 0; i < s.length; i++){
        if (s[i] === "0"){
            zeroLength += 1;
        } else if (s[i] === "1"){
            oneLength += 1;
        }
    }
    //initialize the final answer
    let ans = "";
    //check when there is only 1 one, in this case the one will be is the least significant place
    if (oneLength === 1){
        //place all the zeros first
        for (let i = 0; i < zeroLength; i++){
            ans += "0";
        }
        //place the last one
        ans += "1";
    //check for the case that there is more that 1 one
    } else if (oneLength > 1){
        //place all the ones except for 1 at the front
        for (let i = 0; i < oneLength - 1; i++){
            ans += "1";
        }
        //place the rest of the zeros
        for (let j = 0; j < zeroLength; j++){
            ans += "0";
        }
        //place the last one in the least significant place
        ans += 1;
    }
    return ans;
}