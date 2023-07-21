function isFascinating(n) {
    //create each string
    let n1String = n.toString();
    let n2 = n*2;
    let n2String = n2.toString();
    let n3 = n*3;
    let n3String = n3.toString();
    //create the full string
    let fullString = n1String.concat(n2String).concat(n3String);
    //make array of numbers
    let arr = fullString.split("").sort();
    //check is length is not equal to 9
    if (arr.length !== 9){
        return false;
    }
    //check if each number 1 - 9 is present
    let checkArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== checkArr[i]){
            return false;
        }
    }
    return true;
}