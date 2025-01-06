function makeParts(arr, chunkSize) {
    let ans = [];
    for (let i = 0; i < arr.length; i+=chunkSize){
      let smallArr = [];
      for (let j = i; j < i + chunkSize && j < arr.length; j++){
        smallArr.push(arr[j]);
      }
      ans.push(smallArr);
    }
    return ans;
  }