function rowWeights(array){
    let ans = [0, 0];
    for (let i = 0; i < array.length; i++){
      if (i%2 === 0){
        ans[0] += array[i];
      } else {
        ans[1] += array[i];
      }
    }
    return ans;
  }