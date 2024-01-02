function maxPower(s){
    let ans = 1;
    let arr = [1];
    for (let i = 1; i < s.length; i++){
        if (s[i] === s[i-1]){
            ans++;
        } else {
            arr.push(ans);
            ans = 1;
        }
        arr.push(ans);
    }
    return Math.max(...arr);
}