function findMissingAndRepeatedValues(grid){
    let arr = [];
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            arr.push(grid[i][j]);
        }
    }
    arr.sort(function (a, b) {  return a - b;  });
    let ans = [0, 0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            ans[0] = arr[i];
        } 
    }
    let unique = [... new Set(arr)];
    console.log(unique)
    let count = 1;
    if (unique[unique.length-1] !== grid.length * grid.length){
        ans[1] = grid.length * grid.length;
    }
    for (let i = 0; i < unique.length; i++){
        if (unique[i] === count){
            count++;
        } else {
            ans[1] = unique[i]-1;
            break;
        }
    }
    return ans;
}