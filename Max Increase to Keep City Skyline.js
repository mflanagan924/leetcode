function maxIncreaseKeepingSkyline(grid){
    const numRows = grid.length;
    const numCols = grid[0].length;

    const transposedGrid = [];

    // Iterate through each column of the original grid
    for (let col = 0; col < numCols; col++) {
        const transposedRow = [];

        // Iterate through each row of the original grid
        for (let row = 0; row < numRows; row++) {
            // Add the value at the current column and row to the transposed row
            transposedRow.push(grid[row][col]);
        }

        // Add the transposed row to the transposed grid
        transposedGrid.push(transposedRow);
    }
    let row = [];
    for (let i = 0; i < grid.length; i++){
        row.push(Math.max(...grid[i]));
    }
    let column = [];
    for (let i = 0; i < transposedGrid.length; i++){
        column.push(Math.max(...transposedGrid[i]));
    }
    let newSkyline = [];
    for (let i = 0; i < row.length; i++){
        let smallArr = [];
        for (let j = 0; j < column.length; j++){
            smallArr.push(Math.min(row[i], column[j]));
        }
        newSkyline.push(smallArr);
    }
    let ans = 0;
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < newSkyline.length; j++){
            ans += newSkyline[i][j] - grid[i][j];
        }
    }
    return ans;
}