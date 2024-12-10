function consecutive(array) {
    let ans = 0;
      array = array.sort(function (a, b) {  return a - b;  });
      for (let i = 1; i < array.length; i++){
        if (array[i] !== array[i] + 1){
          ans += array[i] - array[i-1] - 1;
        }
      }
      return ans;
    }