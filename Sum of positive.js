function positiveSum(arr) {
    let ans = 0;
    for(let i = 0; i < arr.length; i++){
    
    if(arr[i] > 0)ans += arr[i]
    }
    return ans
  }