function sliding(nums, k) {
    let ans = [];
    for (let i = 0; i < nums.length-k+1; i++){
        let temp = [];
        for (let j = i; j < k+i; j++){
            temp.push(nums[j]);    
        }
        ans.push(Math.max(...temp));
    }
    return ans;
 }