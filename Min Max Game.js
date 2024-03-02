function minMaxGame(nums){
    //initialize length
    let length = nums.length
    //length will decrease by half each time so while loop until the final length of 1
    while (length > 1){
        //temporary array to store the new numbers
        let newNums = [];
        //initialize even/odd counter
        let even = true;
        //for loop to go through the nums array in steps of 2
        for (let i = 0; i < nums.length; i+=2){
            //if even get the min number
            if (even === true){
                newNums.push(Math.min(nums[i], nums[i+1]));
                even = false;
            //if odd get the max number
            } else if (even === false){
                newNums.push(Math.max(nums[i], nums[i+1]));
                even = true;
            }
        }
        //devide the length by 2
        length = length/2;
        //redefine the new nums array
        nums = newNums;
    }
    //return the final answer
    return nums[0];
}