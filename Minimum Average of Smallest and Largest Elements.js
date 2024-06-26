function minimumAverage(nums){
    nums.sort(function (a, b) {  return a - b;  });
    let avg = [];
    let n = nums.length
    for (let i = 0; i < n/2; i++){
        avg.push((nums[i] + nums[n - i - 1]) / 2);
    }
    return Math.min(...avg);
}