function smallestRangeI(nums, k){
    let max = Math.max(...nums);
    console.log(max)
    let min = Math.min(...nums);
    console.log(min)
    let diff = max - min;
    console.log(diff)
    if (diff <= 2*k){
        return 0;
    }
    return max-k-min-k;
}