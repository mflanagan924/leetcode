function rotate(matrix){
    for (let i = 0; i < matrix.length; i++) {
            for (let j = i + 1; j < matrix[i].length; j++) {
                // Swap elements at (i, j) and (j, i)
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }    
        for (let i = 0; i < matrix.length; i++){
            matrix[i].reverse();
        }
        return matrix;
    }