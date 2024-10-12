function sumArray(array) {
    if (array === undefined || array === null || array.length === 0) {
      return 0;
    }
    if (array.length < 3){
      return 0;
    }
    let max = Math.max(...array);
    
    let min = Math.min(...array);
  
    let ans = 0;
    for (let i = 0; i < array.length; i++){
        ans += array[i];
    }
    return ans - max - min;
  }