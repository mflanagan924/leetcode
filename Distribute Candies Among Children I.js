function distributeCandies(n, limit){
    let ans = 0;
    for (let i = 0; i <= limit; i++){
        for (let j = 0; j <= limit; j++){
            for (let k = 0; k <= limit; k++){
                if (i + j + k === n){
                    ans += 1;
                }
            }
        }
    }
    return ans;
}