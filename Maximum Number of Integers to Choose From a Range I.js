function maxCount(banned, n, maxSum){
    let count = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++){
        if (banned.indexOf(i) < 0){
            if (sum + i <= maxSum){
                sum += i;
                count++;
            }
        }
    }
    return count;
}