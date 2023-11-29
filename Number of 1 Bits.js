function hammingWeight(n){
    //takes n number and turns it into binary string of length 32
    let binaryString = n.toString(2).padStart(32, '0');
    //initialiaze answer
    let ans = 32;
    //for loop to find "0"
    for (let i = 0; i < binaryString.length; i++){
        if (binaryString[i] === "0"){
            ans--;
        }    
    }
    return ans;
}