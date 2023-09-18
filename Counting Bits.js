function countBits(n){
    //empty array to store answer
    let arr = [];
    //for loop to populate array
    for (let i = 0; i <= n; i++){
        //get the bit string
        let x = i.toString(2);
        //remove "0s"
        let y = x.replace(/0/g, "");
        //push the length of "1s"
        arr.push(y.length);
    }
    return arr;
}