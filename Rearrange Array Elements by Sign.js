function rearrangeArray(nums){
    //empty array to store positive numbers
    let pos = [];
    //empty array to store negative numbers
    let neg = [];
    //for loop to find all number positive numbers
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > 0){
            pos.push(nums[i]);
        }
    }
    //for loop to find all negative numbers
    for (let i = 0; i < nums.length; i++){
        if (nums[i] < 0){
            neg.push(nums[i]);
        }
    }
    //empty array to store answer
    let ans = [];
    //for loop to push pos then neg numbers into answer
    for (let i = 0; i < pos.length; i++){
        ans.push(pos[i]);
        ans.push(neg[i]);
    }
    return ans;
}