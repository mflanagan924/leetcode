function removeStars(s){
    //empty array to store letters
    let ans = [];
    //for loop to check if s[i] is "*"
    for (let i = 0; i < s.length; i++){
        //if not "*" than push letter into ans array
        if (s[i] != "*"){
            ans.push(s[i]);
        //if not "*" pop the last letter in the answer array
        } else {
            ans.pop(s[i]);
        }
    }
    //return string
    return ans.join("");
}