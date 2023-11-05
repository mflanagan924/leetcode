function findChampion(grid){
    for (let i = 0; i < grid.length; i++){
        let oneLength = 0;
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === 1){
                oneLength += 1;
            }
        }
        if (oneLength === grid[0].length - 1){
            return i;
        }
    }
}