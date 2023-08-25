function diagonalSum(mat) {
    //initialize answer
    let ans = 0;
    //initialize counter from beginning
    let first = 0;
    //initialize counter from end
    let last = mat.length - 1;
    //for loop to add diagonals
    for (let i = 0; i < mat.length; i++){
        //checks for normal cases
        if (first !== last){
        ans += mat[i][first] + mat[i][last];
        first += 1;
        last -= 1;
        //checks for the case where the length of matrix is odd and there is an overlap
        } else {
            ans += mat[i][first];
            first += 1;
            last -= 1;
        }
    }
    return ans;
}