function minSum(arr) {
    arr = arr.sort(function (a, b) {  return a - b;  });
    let ans = 0;
    let j = arr.length - 1;
    for (let i = 0; i < arr.length/2; i++){
        ans += arr[i]*arr[j];
        j--;
    }
    return ans;
}