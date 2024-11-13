function diagonalSum(matrix){
    let ans = 0;
    for (let i = 0; i < matrix.length; i++) ans += matrix[i][i];
    return ans;
}