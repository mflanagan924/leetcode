const arrowFunc = function(arr) {
    let ans = "";
    for (let i = 0; i < arr.length; i++){
      ans += String.fromCharCode(arr[i]);
    }
    return ans;
  }