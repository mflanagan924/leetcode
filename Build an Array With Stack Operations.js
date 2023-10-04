function buildArray(target, n){
    //changes n if the last number in target array is less than n
    if (target[target.length - 1] < n){
        n = target[target.length - 1];
    }
    //makes an array of all numbers from 1 to n
    let nArr = [];
    for (let i = 1; i <= n; i++){
        nArr.push(i);
    }
    //initialize counter for target array
    let targetCounter = 0;
    //initialize counter for nArr
    let nArrCounter = 0;
    //empty array to store answer
    let ans = [];
    //while loop for when nArrCounter is less than the length of the nArr allows us to check each position individually in both the nArr and target array
    while (nArrCounter < nArr.length){
        //when the nArr and target array have same number than push "Push" and advance both nArr and target array
        if (nArr[nArrCounter] === target[targetCounter]){
            ans.push("Push");
            targetCounter += 1;
            nArrCounter += 1;
        //if not equal than push "Push" + "Pop" and only advance the nArr
        } else {
            ans.push("Push");
            ans.push("Pop");
            nArrCounter += 1;
        }
    }
    return ans;
}