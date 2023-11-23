function decode(encoded, first){
    //initialize first of array
    let arr = [first];
    //for loop to get arr[i+1] = encoded[i] XOR arr[i]
    for (let i = 0; i < encoded.length; i++){
        arr.push(arr[(arr.length-1)]^encoded[i]);
    }
    return arr;
}