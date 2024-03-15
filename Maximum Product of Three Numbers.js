function maximumProduct(nums){
    nums.sort(function (a, b) {  return a - b;  });
    //The answer will always be maximum of product of Maximum, second maximum and third maximum and product of Minimum, second minimum and Maximum element.
    let max = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    let min = nums[0] * nums[1] * nums[nums.length - 1];
    return Math.max(max, min);
}