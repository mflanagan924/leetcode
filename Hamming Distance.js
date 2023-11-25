function hammingDistance(x, y){
    //change x to binary of 32 bits
    const xBinary = x.toString(2).padStart(32, "0");
    //change y to binary of 32 bits
    const yBinary = y.toString(2).padStart(32, "0");
    //intialize answer
    let ans = 0;
    //for loop to check corresponding bits between x and y
    for (let i = 0; i < xBinary.length; i++){
        if (xBinary[i] !== yBinary[i]){
            ans++;
        }
    }
    return ans;
}