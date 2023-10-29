function sumCounts(nums){
    //empty arrays to store subarrays
    const subarrays = [];
    //for loop to find all subarrays
    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            subarrays.push(nums.slice(start, end));
        }
    }
    //initialize final answer
    let ans = 0;
    //for loop to find dintinct values in each subarray, after find the the length, and square it
    for (let i = 0; i < subarrays.length; i++){
        let x = [... new Set(subarrays[i])];
        let length = x.length;
        ans += length * length;
    }
    return ans;
}