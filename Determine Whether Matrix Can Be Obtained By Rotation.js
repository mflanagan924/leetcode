function findRotation(mat, target){
    for (let i = 0; i < 4; i++){
        rotate(mat);
        console.log(mat)
        if (check(mat, target)) {
                return true; // If the matrices match, return true
            }
        }    
        return false; // If no match found after all rotations
    
        
    }
    
    function check(matrix, tar){
        for (let i = 0; i < matrix.length; i++){
            for (let j = 0; j < matrix[i].length; j++){
                if (matrix[i][j] !== tar[i][j]){
                    return false;
                }
            }
        }
        return true;
    }
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
    
    