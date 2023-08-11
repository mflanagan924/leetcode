function finalString(s){
    //empty array to store the letters
    let arr = [];
    //for loop to check if the letter is "i" or not
    for (let i = 0; i < s.length; i++){
        if (s[i] !== "i"){
            arr.push(s[i]);
        } else {
            arr.reverse();
        }
    }
    //returns the joined array
    return arr.join("");
}