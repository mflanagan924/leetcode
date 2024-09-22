function removeEveryOther(arr){
    let ans = [];
    for (let i = 0; i < arr.length; i += 2) {
      ans.push(arr[i])
    }
    return ans;
  }