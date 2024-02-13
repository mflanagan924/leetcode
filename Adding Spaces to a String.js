function addSpaces(s, spaces){
    //counter for the spaces
    let count = 0;
    //initialize the answer
    let ans = "";
    //for loop to go through the string
    for (let i = 0; i < s.length; i++){
        //if the current index is the space add space in string and move up space counter
        if (i === spaces[count]){
            ans += " " + s[i];
            count++;
        //else just add the letter
        } else {
            ans += s[i];
        }
    }
    //return the final answer
    return ans;
}