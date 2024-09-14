function findDeletedNumber(arr, mixArr) {
    if (arr.length === mixArr.length){
        return 0;
    }
    mixArr.sort(function(a, b) {
    return a - b;
  });
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== mixArr[i]){
            return arr[i];
        }
    }
  }