function intersection(nums){
    //initialize answer by making it equal to zero index of nums
    let first = nums[0];
    //for loop to check nums[i] to see if it has the same numbers as nums[0], if not than make it equal to "a"
    for (let i = 0; i < first.length; i++){
        for (let j = 1; j < nums.length; j++){
            if (nums[j].indexOf(first[i]) < 0){
                first[i] = "a";
            }
        }
    }
    //initialize answer
    let ans = [];
    //for loop to find integers that are present in each array of nums
    for (let i = 0; i < first.length; i++){
        if (first[i] !== "a"){
            ans.push(first[i]);
        }
    }
    //sort in ascending order
    return ans.sort((a,b)=>a-b);
}