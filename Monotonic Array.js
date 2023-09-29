function isMonotonic(nums){
    //empty array to store numbers so as to not change the original nums arrays
    let numsStore = [];
    //for loop to push nums integers into numsStore array
    for (let i = 0; i < nums.length; i++){
        numsStore.push(nums[i]);
    }
    //changes numsStore to increasing
    let numsStoreIncrease = numsStore.sort(function (a, b) {  return a - b;  });
    //initialize increase as true
    let increase = true;
    //for loop to check if the numsStore increase is the same as nums array (if so than it is monotonic increasing)
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === numsStoreIncrease[i]){
            increase = true;
        }else{
            increase = false;
            break;
        }
    }
    //changes numsStore to decreasing
    let numsStoreDecrease = numsStore.sort(function (a, b) {  return b - a;  });
    //initialize decrease to true
    let decrease = true;
    //for loop to check if the numsStore decrease is the same as the nums array (if so than it is monotinic decreasing)
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === numsStoreDecrease[i]){
            decrease = true;
        }else{
            decrease = false;
            break;
        }
    }
    //if either the increase is true or the decrease is true than the nums array is monotonic
    if (increase === true || decrease === true){
        return true;
    }
    return false;
}