function nthSmallest(arr, pos){
    arr=arr.sort(function(a,b){return a-b});
    return arr[pos-1];
  }