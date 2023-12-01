function executeInstructions(n, startPos, s){
    //save the start positions
    let startRow = startPos[0];
    let startColumn = startPos[1];
    //empty array to store answer
    let ans = [];
    //for loop to start at each index
    for (let i = 0; i < s.length; i++){
        //initialize count
        let count = 0;
        //for loop to start traversal at the next index
        for (let j = i; j < s.length; j++){
            //change the position based on movement
            if (s[j] === "R"){
                startPos[1] += 1;
            } else if (s[j] === "L"){
                startPos[1] -= 1;
            } else if (s[j] === "U"){
                startPos[0] -= 1;
            } else if (s[j] === "D"){
                startPos[0] += 1;
            }
            //if the new position is on the grid
            if (startPos[0] >= 0 && (startPos[0] <= n - 1) && startPos[1] >= 0 && (startPos[1] <= n - 1)){
                count++;
            //if the new position is off the grid
            } else{
                ans.push(count);
                startPos[0] = startRow;
                startPos[1] = startColumn;
                break;
            }
            //if you reach the end of th movements
            if (j === s.length-1){
            ans.push(count);
            startPos[0] = startRow;
            startPos[1] = startColumn;
            }
        }
        
    }
    return ans;
}