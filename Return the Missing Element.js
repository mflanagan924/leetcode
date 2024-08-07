function getMissingElement(superImportantArray){
    superImportantArray = superImportantArray.sort(function (a, b) {  return a - b;  });
    for (let i = 0; i <= 9; i++){
      if (superImportantArray[i] !== i){
        return i;
      }
    }
  }