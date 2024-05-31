function mergeArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    arr3.sort(function (a, b) {  return a - b;  });
    let unique = [...new Set(arr3)];
    return unique;
  }