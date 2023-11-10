function nextGreaterElement(nums1, nums2){
    //empty array to store final answer
    let ans = [];
    //for loop to check each number
    for (let i = 0; i < nums1.length; i++){
        //get index of nums1[i] in nums2 array
        let index = nums2.indexOf(nums1[i]);
        //if it is the last number 
        if (index === nums2.length - 1){
            ans.push(-1);
        }
        //otherwise if not last number check all the numbers after it and if any of them are greater push it to answer if none are greater push -1
        for (let j = index + 1; j < nums2.length; j++){
            if (nums2[j] > nums1[i]){
                ans.push(nums2[j]);
                break;
            } else if (j === nums2.length-1){
                ans.push(-1);
            }
        } 
    }
    return ans;
}