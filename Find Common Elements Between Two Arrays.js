function findIntersectionValues(nums1, nums2){
    let answer = [0, 0];
    for (let i = 0; i < nums1.length; i++){
        for (let j = 0; j < nums2.length; j++){
            if (nums1[i] === nums2[j]){
                answer[0] += 1;
                break;
            }
        }
    }
    for (let i = 0; i < nums2.length; i++){
        for (let j = 0; j < nums1.length; j++){
            if (nums2[i] === nums1[j]){
                answer[1] += 1;
                break;
            }
        }
    }
    return answer;
}