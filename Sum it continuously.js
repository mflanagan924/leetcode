function add(arr) {
    let count = 0;
    let ans = [];
    for (let i = 0; i < arr.length; i++){
      count += arr[i];
      ans.push(count);
    }
    return ans;
  }