function intersection(nums1, nums2){
    //empty array to store the answer
    let ans = [];
    //initialize that nums1 is smaller
    let nums1IsSmaller = true;
    //check if nums1 is smaller or bigger than nums2
    if (nums1.length >= nums2.length){
        nums1IsSmaller = false;
    }
    //if nums1 is smaller
    if (nums1IsSmaller){
        //for loop to find if there are elements in nums1 that are in nums2
        for (let i = 0; i < nums1.length; i++){
            let index = nums2.indexOf(nums1[i]);
            if (index >= 0){
                ans.push(nums1[i]);
                nums2[index] = "a";
            }
        }
    }
    //if nums2 is smaller
    if (!nums1IsSmaller){
        //for loop to find if there are elements in nums2 that are in nums1
        for (let i = 0; i < nums2.length; i++){
            let index = nums1.indexOf(nums2[i]);
            if (index >= 0){
                ans.push(nums2[i]);
                nums1[index] = "a";
            }
        }
    }
    //return only unique answers
    return [...new Set(ans)];
}