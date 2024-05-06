function minimumDeletions(nums){
    let min = Math.min(...nums);
    let minIndex = nums.indexOf(min);
    let max = Math.max(...nums);
    let maxIndex = nums.indexOf(max);
    let doubleFront = Math.max(minIndex, maxIndex) + 1;
    let doubleBack = nums.length - 1 - Math.min(minIndex, maxIndex) + 1;
    let frontBack = Math.min(minIndex, maxIndex) + 1 + nums.length - Math.max(minIndex, maxIndex);
    return Math.min(doubleFront, doubleBack, frontBack);
}