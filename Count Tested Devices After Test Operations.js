function countTestedDevices(batteryPercentages){
    let ans = 0;
    for (let i = 0; i < batteryPercentages.length; i++){
        if (batteryPercentages[i] > 0){
            ans++;
            for (let j = i + 1; j < batteryPercentages.length; j++){
                batteryPercentages[j] = batteryPercentages[j] - 1;
            }
        }
    }
    return ans;
}