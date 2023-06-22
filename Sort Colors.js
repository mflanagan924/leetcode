function sortColors(nums){
    //empty array to store count of colors
    let arr = [];
    //initialize zero count
    let countZero = 0;
    //initialize one count
    let countOne = 0;
    //initialize two count
    let countTwo = 0;
    //for loop to count zeros
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            countZero += 1;
        }
    }
    //for loop to count ones
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 1){
            countOne += 1;
        }
    }
    //for loop to count twos
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 2){
            countTwo += 1;
        }
    }
    //pushes the counts in order of zeros, ones, and twos
    arr.push(countZero);
    arr.push(countOne);
    arr.push(countTwo);
    //get the increasing number ie if the original array was [2,2,2] => [2,4,6], needed to place the numbers in place and know the index
    for (let i = 1; i < arr.length; i++){
        arr[i] = arr[i] + arr[i-1];
    }
    //for loop to add the zeros in place
    for (let i = 0; i < arr[0]; i++){
        nums[i] = 0;    
    }
    //for loop to add the ones in place
    for (let i = arr[0]; i < arr[1]; i++){
        nums[i] = 1;
    }
    //for loop to add th twos in place
    for (let i = arr[1]; i < arr[2]; i++){
        nums[i] = 2;
    }
    //return the new nums array
    return nums;
}