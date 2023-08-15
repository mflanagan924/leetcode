function backspaceCompare(s, t){
    //empty array to store letters
    let ans1 = [];
    //for loop to check if s[i] is "*"
    for (let i = 0; i < s.length; i++){
        //if not "*" than push letter into ans array
        if (s[i] != "#"){
            ans1.push(s[i]);
        //if not "*" pop the last letter in the answer array
        } else {
            ans1.pop(s[i]);
        }
    }
    //ans1 string
    let ans1String = ans1.join("");
    //empty array to store letters
    let ans2 = [];
    //for loop to check if s[i] is "*"
    for (let i = 0; i < t.length; i++){
        //if not "*" than push letter into ans array
        if (t[i] != "#"){
            ans2.push(t[i]);
        //if not "*" pop the last letter in the answer array
        } else {
            ans2.pop(t[i]);
        }
    }
    //ans1 string
    let ans2String = ans2.join("");
    //compare the two strings
    if (ans1String === ans2String){
        return true;
    }
    return false;
}