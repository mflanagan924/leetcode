function reverseList(arr) {
    let ans = [];
    for (let i = arr.length-1; i >= 0; i--){
      ans.push(arr[i]);
    }
    return ans;
  }