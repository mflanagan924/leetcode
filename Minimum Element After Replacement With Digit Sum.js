function minElement(nums){
    let arr = [];
    for (let i = 0; i < nums.length; i++){
        let x = nums[i].toString().split("");
        let sum = 0;
        for (let j = 0; j < x.length; j++){
            sum += +x[j];
        }
        arr.push(sum);
    }
    return Math.min(...arr);
}