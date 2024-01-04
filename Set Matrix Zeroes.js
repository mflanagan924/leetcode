function setZeroes(matrix){
    let colums = [];
    let rows = [];
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === 0){
                colums.push(j);
                rows.push(i);
            }
        }
    }
    let uniqueColums = [... new Set(colums)];
    let uniqueRows = [... new Set(rows)];
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (uniqueColums.indexOf(j) >= 0 || uniqueRows.indexOf(i) >= 0){
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}