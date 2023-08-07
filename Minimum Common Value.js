function getCommon(nums1, nums2){
    //intialize answer
    let ans = -1;
    //for loop to check if there is a number in nums1 that is also in nums2, stop at the first number
    for (let i = 0; i < nums1.length; i++){
        if (nums2.indexOf(nums1[i]) >= 0){
            ans = nums1[i];
            break;
        }
    }
    return ans;
}