function findLongestChain(pairs){
    let ans = 1;
    let sort = pairs.sort(function (a, b) {  return a[0] - b[0];  });
    
    let arr = [sort[0]];
    for (let i = 0; i < sort.length - 1; i++){
        for (let j = i + 1; j < sort.length; j++){
            if (sort[j][0] > sort[i][1]){
                ans++;
                arr.push(sort[j]);
                i = j-1;
                break;
            }
        }
    }
    let ans2 = 1;
    for (let i = sort.length - 1; i > 0; i--){
        for (let j = i - 1; j >= 0; j--){
            if (sort[j][1] < sort[i][0]){
                ans2++
                i = j + 1;
                break;
            }
        }
    }
    return Math.max(ans, ans2);
}