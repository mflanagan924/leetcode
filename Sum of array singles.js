function repeats(arr){
    arr = arr.sort(function (a, b) {  return a - b;  });
      console.log(arr)
      let sum = 0;
      let i = 0;
      while (i < arr.length){
        if (arr[i] !== arr[i+1]){
          sum += arr[i];
          i++;
        } else {
          i+=2;
        }
      }
      return sum
      }   