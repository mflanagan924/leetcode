function coloredCells(n){
    //initialize answer
    let ans = 1;
    //initialize the step
    let step = 4;
    //for loop to add step and up step each step
    for (let i = 1; i < n; i++){
        ans += step;
        step += 4;
    }
    return ans;
}
