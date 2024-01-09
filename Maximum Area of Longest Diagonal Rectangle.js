function areaOfMaxDiagonal(dimensions){
    let area = 0;
    let diagonalArr = [];
    for (let i = 0; i < dimensions.length; i++){
        let x = Math.sqrt(dimensions[i][0]*dimensions[i][0] + dimensions[i][1]*dimensions[i][1])
        diagonalArr.push(x); 
    }
    let max = Math.max(...diagonalArr);
    for (let i = 0; i < diagonalArr.length; i++){
        if (diagonalArr[i] === max){
            if (dimensions[i][0]*dimensions[i][1] > area){
                area = dimensions[i][0]*dimensions[i][1];
            }
        }
    }
    return area;
}