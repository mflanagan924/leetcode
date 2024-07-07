function sort(initialArray, sortingArray) {
    let arr = [];
    for (let i = 0; i < initialArray.length; i++){
        let smallArr = [];
        smallArr.push(sortingArray[i]);
        smallArr.push(initialArray[i]);
        arr.push(smallArr);
    }
    arr = arr.sort(function (a, b) {  return a[0] - b[0];  });
    let ans = [];
    for (let i = 0; i < arr.length; i++){
        ans.push(arr[i][1]);
    }
    return ans;
  }