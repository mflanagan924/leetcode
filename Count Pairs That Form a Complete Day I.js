function countCompleteDayPairs(hours){
    let ans = 0;
    for (let i = 0; i < hours.length - 1; i++){
        for (let j = i + 1; j < hours.length; j++){
            if ((hours[i] + hours[j])%24 === 0){
                ans++;
            }
        }
    }
    return ans;
}