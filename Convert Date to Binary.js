function convertDateToBinary(date){
    let arr = date.split("-");
    for (let i = 0; i < arr.length; i++){
        let num = +arr[i];
        let bin = num.toString(2);
        arr[i] = bin;
    }
    return arr.join("-");
}