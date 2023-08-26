function minNumber(nums1, nums2){
    //empty array to store same numbers between arrays
    let same = [];
    //for loop to find the same numbers
    for (let i = 0; i < nums1.length; i++){
        for (let j = 0; j < nums2.length; j++){
            if (nums1[i] === nums2[j]){
                same.push(nums1[i]);
            }
        }
    }
    //if there is a same number than this is the smallest number that can be formed, find the minimum value
    if (same.length > 0){
        return Math.min(...same);
    }
    //else find min value in nums1
    let min1 = Math.min(...nums1);
    //turn to string
    let min1String = min1.toString();
    //find min value in nums2
    let min2 = Math.min(...nums2);
    //turn to string
    let min2String = min2.toString();
    //if min value in nums1 is less than min value in nums2 concat 1.concat(2)
    if (min1 < min2){
        return +min1String.concat(min2String);
    }
    //if min value is nums2 is less than min value in nums1 concat 2.concat(1)
    if (min1 > min2){
        return +min2String.concat(min1String);
    }
}