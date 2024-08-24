function findComplement(num){
    let bin = num.toString(2);
    let complement = "";
    for (let i = 0; i < bin.length; i++){
        if (bin[i] === "0"){
            complement += "1";
        } else {
            complement += "0";
        }
    }
    return parseInt(complement, 2);
}