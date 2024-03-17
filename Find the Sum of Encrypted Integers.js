function sumOfEncryptedInt(nums){
    let ans = 0;
    for (let i = 0; i < nums.length; i++){
        let tempArr = [];
        let string = nums[i].toString();
        let length = string.length;
        let max = Math.max(...string);
        for (let j = 0; j < length; j++){
            tempArr.push(max);
        }
        nums[i] = tempArr.join("");
        ans += +nums[i];
    }
    return ans;
}