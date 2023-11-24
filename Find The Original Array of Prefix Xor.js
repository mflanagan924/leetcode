function findArray(pref){
    //initialize arr answer
    let arr = [pref[0]];
    //initialize the next part of the array
    let next;
    //for loop to get the next answer
    for (let i = 1; i < pref.length; i++){
        //next answer is the bitwise of current pref[i] and previous pref[i-1]
        next = pref[i] ^ pref[i-1];
        arr.push(next);
    }
    return arr;
}