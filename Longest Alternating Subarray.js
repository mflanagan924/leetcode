function alternatingSubarray(nums){
    //empty array to store all subarrays
    const subarrays = [];
    //find all subarrays
    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            if (nums.slice(start, end).length > 1){
                subarrays.push(nums.slice(start, end));
            }
        }
    }
    //empty array to store alternating subarrays
    let alternating = [];
    //for loop to find alternating subarrays
    for (let i = 0; i < subarrays.length; i++){
        //initialize diff
        let diff = 1;
        //intialize if it is alternating
        let alt = true;
        //for loop to check each subarray
        for (let j = 0; j < subarrays[i].length - 1; j++){
            //if s1 - s0 = 1...
            if (subarrays[i][j+1] - subarrays[i][j] === diff){
                //alt is true
                alt = true;
                //change diff to negative 1
                diff = -diff;
            }else {
                alt = false;
                break;
            }
        }
        if(alt !== false){
            alternating.push(subarrays[i]);
        }
    }
    //intialize final answer
    let ans = 0;
    //for loopt to check if the length of alternating subarray is greater than final answer
    for (let i = 0; i < alternating.length; i++){
        if (alternating[i].length > ans){
            ans = alternating[i].length;
        }
    }
    //case when there is no subarray that fits criteria
    if (ans === 0){
        return -1;
    }
    return ans;
}