function findDifference(nums1, nums2){
    //unique values in nums1
    let unique1 = [... new Set(nums1)];
    //unique values in nums2
    let unique2 = [... new Set(nums2)];
    //empty array to store answer[0]
    let part1 = [];
    //for looop to find all distinct integers in nums1 which are not present in nums2
    for (let i = 0; i < unique1.length; i++){
        if (unique2.indexOf(unique1[i]) < 0){
            part1.push(unique1[i]);
        }
    }
    //empty array to store answer[1]
    let part2 = [];
    //for loop to find all distinct integers in nums2 which are not present in nums1
    for (let i = 0; i < unique2.length; i++){
        if (unique1.indexOf(unique2[i]) < 0){
            part2.push(unique2[i]);
        }
    }
    //populate answer
    let answer = [part1, part2];
    return answer;
}