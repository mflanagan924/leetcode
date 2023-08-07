function findTheArrayConcVal(nums){
    //initialize even
    let even = false;
    //check if the nums array is even or odd in length
    if (nums.length%2 === 0){
        even = true;
    }
    //if even set the n
    if (even === true){
        n = nums.length/2 - 1;
    //if odd set the n and find the middle number
    } else {
        n = Math.floor(nums.length/2 - 1);
        middle = nums[Math.floor(nums.length/2)];
    }
    //empty array to store the concatenation values
    let arr = [];
    //for loop to get th concatenation values
    for (let i = 0; i <= n; i++){
        let x = nums[i].toString() + nums[nums.length-1-i].toString();
        arr.push(+x);
    }
    //if odd length array add the middle number to array
    if (even === false){
        arr.push(middle);
    }
    //initialize the final answer
    let ans = 0;
    //for loop to sum the array
    for (let i = 0; i < arr.length; i++){
        ans += arr[i];
    }
    return ans;
}