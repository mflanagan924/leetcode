function onesMinusZeros(grid){
    let onesRow = [];
    let onesCol = new Array(grid[0].length).fill(0);
    for (let i = 0; i < grid.length; i++){
        let oneCount = 0;
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === 1){
                oneCount++;
                onesCol[j]++;
            }
        }
        onesRow.push(oneCount);
    }
    let rowLength = grid[0].length;
    let columnLength = grid.length;
    let zerosRow = [];
    let zerosCol = [];
    for (let i = 0; i < onesRow.length; i++){
        zerosRow.push(rowLength - onesRow[i]);
    }
    for (let i = 0; i < onesCol.length; i++){
        zerosCol.push(columnLength - onesCol[i]);
    }
    let ans = [];
    for (let i = 0; i < onesRow.length; i++){
        let smallArr = [];
        for (let j = 0; j < onesCol.length; j++){
            let x = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
            smallArr.push(x);
        }
        ans.push(smallArr);
    }
    return ans;
}