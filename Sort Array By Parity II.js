function sortArrayByParityII(nums){
    //array to store even numbers
    let even = [];
    //array to store odd numbers
    let odd = [];
    //for loop to find even numbers
    for (let i = 0; i < nums.length; i++){
        if (nums[i]%2 === 0){
            even.push(nums[i]);
        }
    }
    //for loop to find odd numbers
    for (let i = 0; i < nums.length; i++){
        if (nums[i]%2 !== 0){
            odd.push(nums[i]);
        }
    }
    //empty array to store answers
    let ans = [];
    //for loop to push even then odd numbers
    for (let i = 0; i < even.length; i++){
        ans.push(even[i]);
        ans.push(odd[i]);
    }
    return ans;
}