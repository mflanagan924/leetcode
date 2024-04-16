function scoreOfString(s){
    let arr = [];
    for (let i = 0; i < s.length; i++){
        arr.push(s.charCodeAt(i));
    }
    let ans = 0;
    for (let i = 0; i < arr.length - 1; i++){
        ans += Math.abs(arr[i] - arr[i+1]);
    }
    return ans;
}