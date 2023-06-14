function sumBase(n,k){
    //changes n to base k
    let base = n.toString(k);
    //splits the string into array
    let arr = base.split("");
    //initialize answer
    let ans = 0;
    //for loop to sum digits
    for (let i = 0; i < arr.length; i++){
        ans += +arr[i];
    }
    return ans;
}