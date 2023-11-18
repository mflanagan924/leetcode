function deleteGreatestValue(grid){
    //get the length of grid element to get the total number of loops
    let length = grid[0].length;
    //initialize the count of for how many times we need to loop
    let count = 0;
    //intialize answer
    let ans = 0;
    //while loop using initial count and length 
    while (count < length){
        //temporary array to stor the maximum at each step
        let temp = [];
        //for loop to check each row
        for (let i = 0; i < grid.length; i++){
            //get the index of the max of each row
            let index = grid[i].indexOf(Math.max(...grid[i]));
            //push the max of each row into temporary array
            temp.push(Math.max(...grid[i]));
            //remove the max of each row
            grid[i].splice(index, 1);
        }
        //add one to count to eventually end the while loop
        count += 1;
        //find the max of each step
        ans += Math.max(...temp);
    }
    return ans;
}