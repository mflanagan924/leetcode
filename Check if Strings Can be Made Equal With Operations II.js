function checkStrings(s1, s2){
    //initialize the even and odd letters for s1
    let s1Even = "";
    let s1Odd = "";
    //for loop to get the strings of only even and odd letters for s1
    for (let i = 0; i < s1.length; i++){
        if (i%2 === 0){
        s1Even += s1[i];
        }  else if (i%2 !== 0){
           s1Odd += s1[i]; 
        }
    }
    //initialize the even and odd letters for s2
    let s2Even = "";
    let s2Odd = "";
    //for loop to get the strings of only even and odd letters for s2
    for (let i = 0; i < s2.length; i++){
        if (i%2 === 0){
        s2Even += s2[i];
        }  else if (i%2 !== 0){
           s2Odd += s2[i]; 
        }
    }
    //sort previous built strings in ABC order
    let s1EvenAbc = s1Even.split("").sort().join("");
    let s1OddAbc = s1Odd.split("").sort().join("");
    let s2EvenAbc = s2Even.split("").sort().join("");
    let s2OddAbc = s2Odd.split("").sort().join("");
    //check if the even and odd strings for s1 and s2 are equal
    if (s1EvenAbc === s2EvenAbc && s1OddAbc === s2OddAbc){
        return true;
    }
    return false;
}