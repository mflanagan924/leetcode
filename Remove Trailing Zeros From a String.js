function removeTrailingZeros(num){
    //split and reverse the num array
    let reverseArr = num.split("").reverse();
    //for loop to remove the zeros at the beginning (which represent the trailing zeros)
    for (let i = 0; i < reverseArr.length; i++){
        while (reverseArr[i] === "0"){
            reverseArr.shift();
        } 
        //reverses and joins the answer
        return reverseArr.reverse().join("");
        
    }
}