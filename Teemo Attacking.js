function findPoisonedDuration(timeSeries, duration){
    //initialize answer
    let ans = 0;
    //for loop to count the poison time
    for (let i = 0; i < timeSeries.length - 1; i++){
        //checks if the difference between timeSeries[i+1] and timeSeries[i] is greater than the duration, if so, then adds the duration to the total poison time
        if (timeSeries[i+1] - timeSeries[i] > duration){
            ans += duration;
        //if not then addes the difference between timeSeries[i+1] and timeSeries[i]
        } else {
            ans += timeSeries[i+1] - timeSeries[i];
        }
    }
    //adds the duration to count for the poison time that takes place after the last timeSeries
    ans += duration;
    return ans;
}