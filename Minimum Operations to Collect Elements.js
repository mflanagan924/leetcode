function minOperations(nums, k){
    //empty array to store numbers of k
    let kArr = [];
    //for loop to populate the 1, ..., k array
    for (let i = 1; i <= k ; i++){
        kArr.push(i);
    }
    //reverse the nums array
    nums.reverse();
    //initialize answer
    let ans = 0;
    //initialize the length of kArr
    let kArrLength = kArr.length;
    //initialize the counter of items in kArr
    let m = 0;
    //initialize the counter to check items in nums array
    let i = 0;
    //while loop to check for elements 1, 2, ..., k
    while (m < kArrLength){
        //if the item is in the kArr than add one to answer, add one to the kArr counter and move forward by one in the nums array
        if (kArr.indexOf(nums[i]) >= 0){
            ans += 1;
            //removes the number from the kArr, this is to account for repeated numbers in the nums array
            kArr.splice(kArr.indexOf(nums[i]), 1);
            m += 1;
            i++;
        //if not in the kArr then increase answer by one, and move forward in the nums array
        } else if (kArr.indexOf(nums[i]) < 0) {
            ans += 1;
            i++;
        }
    }
    return ans;
}