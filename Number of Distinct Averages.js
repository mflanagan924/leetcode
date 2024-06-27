function distinctAverages(nums){
    nums.sort(function (a, b) {  return a - b;  });
    let n = nums.length/2;
    let length = nums.length;
    let arr = [];
    for (let i = 0; i < n; i++){
        let avg = (nums[i] + nums[length - i - 1]) / 2;
        if (arr.indexOf(avg) < 0){
            arr.push(avg);
        }
    }
    return arr.length;
}