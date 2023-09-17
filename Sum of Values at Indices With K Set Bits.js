function sumIndicesWithKSetBits(nums, k){
    //empty array to store binary
    let arr = [];
    //for loop to find binary
    for (let i = 0; i < nums.length; i++){
        arr.push(i.toString(2));
    }
    //empty array to store the '1s'
    let arrNoZero = [];
    //for loop to get rid of zeros
    for (let i = 0; i < arr.length; i++){
        arrNoZero.push(arr[i].replace(/0/g, ""));
    }
    //intialize answer
    let ans = 0;
    //for loop to get the sum of elements in nums whose corresponding indices have exactly k set bits in their binary representation
    for (let i = 0; i < arrNoZero.length; i++){
        if (arrNoZero[i].length === k){
            ans += nums[i];
        }
    }
    return ans;
}