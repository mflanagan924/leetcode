function mergeArrays(nums1, nums2){
    let ans = [];
    for (let i = 0; i < nums1.length; i++){
        for (let j = 0; j < nums2.length; j++){
            if (nums1[i][0] === nums2[j][0]){
                nums1[i][1] += nums2[j][1];
                nums2[j][0] = "a";
                ans.push(nums1[i]);
                break;
            }
            if (j === nums2.length-1 && nums1[i][0] != nums2[j][0]){
                ans.push(nums1[i]);
            }
        }
    }
    console.log(ans)
    for (let i = 0; i < nums2.length; i++){
        for (let j = 0; j < nums1.length; j++){
            if (nums2[i][0] === nums1[j][0]){
                nums2[i][1] += nums1[j][1];
                nums1[j][0] = "a";
                ans.push(nums2[i]);
                break;
            }
            
        }
    }
    console.log(ans)
    for (let i = 0; i < nums2.length; i++){
        if (nums2[i][0] !== "a"){
            ans.push(nums2[i]);
        }
    }
    console.log(ans)
    ans.sort(function (a, b) {  return a[0] - b[0];  });
    return ans;
    
}