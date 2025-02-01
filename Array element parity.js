function solve(arr){
    arr = arr.sort(function (a, b) {  return a - b;  });
    let neg = 0;
    let pos = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            neg++;
        } else {
            pos++;
        }
    }
    if (pos > neg){
        arr = arr.sort(function (a, b) {  return b - a;  });
    }
    for (let i = 0; i < arr.length; i++){
        if (arr.indexOf(-arr[i]) < 0){
            return arr[i];
        }
    }
  }