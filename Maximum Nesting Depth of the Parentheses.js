function maxDepth(s){
    //empty array to store depth of each number
    let arr = [];
    //for loop to check each position in string
    for (let i = 0; i < s.length; i++){
        //if the position is not a parentheses
        if (s[i] !== "(" || s[i] !== ")"){
            //initialize count for left parentheses
            let front = 0;
            //initialize the count for right parentheses
            let back = 0;
            //for loop to check all positions before number
            for (let j = 0; j < i; j++){
                //if left parentheses
                if (s[j] === "("){
                    front += 1;
                //if right parentheses
                } else if (s[j] === ")"){
                    back += 1;
                }
            }
            //The depth of any character in the VPS is the ( number of left brackets before it ) - ( number of right brackets before it )
            arr.push(front - back);
        }
    }
    //find max depth
    return Math.max(...arr);
}