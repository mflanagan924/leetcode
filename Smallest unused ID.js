function nextId(ids){
    let unique = [...new Set(ids)];
    unique = unique.sort(function (a, b) {  return a - b;  });
    if (unique[0] !== 0){
      return 0;
    }
    for (let i = 1; i < unique.length; i++){
      if (unique[i] !== unique[i-1]+1){
        return unique[i-1]+1;
      }
    }
    return unique[unique.length-1] + 1;
  }