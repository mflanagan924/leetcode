function squeakyClean(arr) {
    let cleanedArr = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] !== "" && arr[i] !== 0 && arr[i] !== null && arr[i] !== undefined){
        cleanedArr.push(arr[i]);
      }
    }
    return cleanedArr;
  }