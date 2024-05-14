function satisfiesConditions(grid) {
    // Check the first condition: grid[i][j] should not equal grid[i+1][j]
    for (let i = 0; i < grid.length - 1; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== grid[i + 1][j]) {
                return false;
            }
        }
    }

    // Check the second condition: grid[i][j] should not equal grid[i][j+1]
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length - 1; j++) {
            if (grid[i][j] === grid[i][j + 1]) {
                return false;
            }
        }
    }

    return true;
}