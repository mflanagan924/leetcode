function checkValid(matrix) {
    //find matrix n
    let n = matrix.length;
    //initialize row and column to true
    let row = true;
    let column = true;
    //for loop to find if rows is valid
    for (let i = 0; i < matrix.length; i++){
        for (let j = 1; j <= matrix[i].length; j++){
            if (matrix[i].indexOf(j) < 0){
                row = false;
            }
        }
    }
    //empty array to store the column info
    let columnArr = [];
    //for loop to populate the column values from matrix
    for (let i = 0; i < n; i++){
        let smallArr = [];
        for (let j = 0; j < matrix.length; j++){
            smallArr.push(matrix[j][i]);
            
        }
        columnArr.push(smallArr);
    }
    //for loop to find if columns are valid
    for (let i = 0; i < columnArr.length; i++){
        for (let j = 1; j <= columnArr[i].length; j++){
            if (columnArr[i].indexOf(j) < 0){
                column = false;
            }
        }
    }
    //check if both column and row are true
    if (column === true && row === true){
        return true;
    }
    return false;
}