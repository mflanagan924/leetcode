function countKeyChanges(s){
    let lowerCase = s.toLowerCase();
    let ans = 0;
    for (let i = 1; i < lowerCase.length; i++){
        if (lowerCase[i] !== lowerCase[i-1]){
            ans++;
        }
    }
    return ans;
}