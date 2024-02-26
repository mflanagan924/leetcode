function twoOutOfThree(nums1, nums2, nums3){
    let unique1 = [... new Set(nums1)];
    let unique2 = [... new Set(nums2)];
    let unique3 = [... new Set(nums3)];
    let ans = [];
    for (let i = 0; i < unique1.length; i++){
        if (unique2.indexOf(unique1[i]) >= 0 || unique3.indexOf(unique1[i]) >= 0){
            ans.push(unique1[i]);
        }
    }
    for (let i = 0; i < unique2.length; i++){
        if (unique3.indexOf(unique2[i]) >= 0 && ans.indexOf(unique2[i]) < 0){
            ans.push(unique2[i]);
        }
    }
    return ans;
}