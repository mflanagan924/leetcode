function answerQueries(nums, queries){
    nums.sort(function (a, b) {  return a - b;  });
    console.log(nums)
    let runningTotal = [nums[0]];
    for (let i = 1; i < nums.length; i++){
        runningTotal.push(nums[i] + runningTotal[i-1]);
    }
    console.log(runningTotal)
    
    let answer = [];
    for (let i = 0; i < queries.length; i++){
        let count = 0;
        for (let j = 0; j < runningTotal.length; j++){
            if (runningTotal[j] <= queries[i]){
                count++;
            } else if (runningTotal[j] > queries[i]){
                answer.push(count);
                break;
            }
            if (count === nums.length){
                answer.push(count);
            }
        }
    }
    return answer;
}