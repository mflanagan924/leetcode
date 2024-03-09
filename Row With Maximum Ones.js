function rowAndMaximumOnes(mat){
    let row = 0;
    let count = 0;
    for (let i = 0; i < mat.length; i++){
        let oneCount = 0;
        for (let j = 0; j < mat[i].length; j++){
            if (mat[i][j] === 1){
                oneCount++;
            }
        }
        if (oneCount > count){
            count = oneCount;
            row = i;
        }
    }
    return [row, count];
}