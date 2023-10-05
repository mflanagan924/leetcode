function minimumRightShifts(nums){
    //shallow copy of nums
    let sortNums = [...nums];
    //sort in ascending order
    sortNums.sort(function (a, b) {  return a - b;  });
    //initialize answer to zero
    let ans = 0;
    //check if it is already in ascending order
    if(JSON.stringify(sortNums) === JSON.stringify(nums)){
        return ans;
    }
    //for loop to right shift
    for (let i = 0; i < nums.length; i++){
        //takes number from end
        let removedElement = nums.pop();
        //adds that number back to the front
        nums.unshift(removedElement);
        //increment answer by 1
        ans += 1;
        //if the new shifted array is in ancending order then return the answer
        if(JSON.stringify(sortNums) === JSON.stringify(nums)){
            return ans;
        } 
    }
    //if there is no right shift that will equal the ascending order return -1 meaning that there is nothing
    return -1;
}