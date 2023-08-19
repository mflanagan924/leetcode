function judgeCircle(moves){
    //finalPosition[0] === x
    //finalPosition[1] === y
    //initialize the final position
    let finalPosition = [0, 0];
    //for loop to change the position based on U, D, L, or R
    for (let i = 0; i < moves.length; i++){
        if (moves[i] === "U"){
            finalPosition[1] += 1;
        } else if (moves[i] === "D"){
            finalPosition[1] -= 1;
        } else if (moves[i] === "R"){
            finalPosition[0] += 1;
        } else if (moves[i] === "L"){
            finalPosition[0] -= 1;
        }
    }
    //check if the final position is (0, 0)
    if (finalPosition[0] === 0 && finalPosition[1] === 0){
        return true;
    }
    return false;
}