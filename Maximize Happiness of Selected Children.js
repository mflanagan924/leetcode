function maximumHappinessSum(happiness, k){
    happiness.sort(function (a, b) {  return b - a;  });
    let ans = 0;
    let count = 1;
    if (k === 1){
        return happiness[0];
    }
        for (let i = 0; i < happiness.length; i++){
            if (happiness[i] > 0 && k > 0){
                ans += happiness[i];
                happiness[i+1] -= count;
                count++;
                k--;
            } else if (happiness[i] <= 0 && k > 0){
                ans += 0;
                happiness[i+1] -= count;
                count++;
                k--;
            } else if (k === 0){
                break;
            }
        }
    
    return ans;
    
}