function maxDistance(nums1, nums2) {
    let maxDistance = 0;
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            maxDistance = Math.max(maxDistance, j - i);
            j++;
        } else {
            i++;
        }
    }

    return maxDistance;
}
