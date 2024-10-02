function peakAndValley(arr){
    let ans = [];
    for (let i = 3; i < arr.length - 3; i++){
        if (arr[i] < arr[i-1] && arr[i] < arr[i-2] && arr[i] < arr[i-3] && arr[i] < arr[i+1] && arr[i] < arr[i+2] && arr[i] < arr[i+3]){
            ans.push(arr[i]);
        }
        if (arr[i] > arr[i-1] && arr[i] > arr[i-2] && arr[i] > arr[i-3] && arr[i] > arr[i+1] && arr[i] > arr[i+2] && arr[i] > arr[i+3]){
            ans.push(arr[i]);
        }
    }
    return ans;
    
  }