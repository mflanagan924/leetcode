function countQuadruplets(nums){
    //initialize answer
    let ans = 0;
    //for loop to check nums[a] + nums[b] + nums[c] == nums[d], and a < b < c < d
    for (let a = 0; a < nums.length; a++){
        for (let b = a + 1; b < nums.length; b++){
            for (let c = b + 1; c < nums.length; c++){
                for (let d = c + 1; d < nums.length; d++){
                    if (nums[a] + nums[b] + nums[c] == nums[d]){
                        ans += 1;
                        }
                    }
                }
            }
        }
    return ans;
}