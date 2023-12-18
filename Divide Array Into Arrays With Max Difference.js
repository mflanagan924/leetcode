function divideArray(nums, k){
    //sort nums in ascending order
    nums.sort(function (a, b) {  return a - b;  });
    //empty array to store final answer
    let ans = [];
    //for loop to check if the difference between each 3 numbers is less than or equal to k, if so push
    for (let i = 0; i < nums.length; i+=3){
        let smallArr = [];
        if (nums[i+2]-nums[i] <= k){
            smallArr.push(nums[i]);
            smallArr.push(nums[i+1]);
            smallArr.push(nums[i+2]);
            ans.push(smallArr);
        //else not possible and return empty array
        } else {
            return [];
        }
    }
    return ans;
}