function numberOfPairs(nums1, nums2, k){
    let ans = 0;
    for (let i = 0; i < nums1.length; i++){
        for (let j = 0; j < nums2.length; j++){
            if (nums1[i]%(nums2[j]*k) === 0){
                ans++;
            }
        }
    }
    return ans;
}
