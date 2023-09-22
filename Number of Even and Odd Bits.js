function evenOddBit(n){
    //gets binary
    let binary = n.toString(2).split("").reverse().join("");
    //intialize even and odd
    let even = 0;
    let odd = 0;
    //for loop to find if even or odd index has "1"
    for (let i = 0; i < binary.length; i++){
        if (i%2 === 0 && binary[i] === "1"){
            even += 1;
        } else if (i%2 === 1 && binary[i] === "1"){
            odd += 1;
        }
    }
    return [even, odd];
}