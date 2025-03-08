function smallestInteger(matrix) {
    let arr = matrix.flat().sort(function (a, b) {  return a - b;  }).filter(function(x){ return x > -1 });
  
    let unique = [...new Set(arr)]
    console.log(unique)
    if (unique[0] !== 0){
      return 0;
    }
    for (let i = 0; i < unique.length; i++){
      if (unique[i] !== unique[i+1] - 1){
        return unique[i] + 1;
      }
    }
    
  }