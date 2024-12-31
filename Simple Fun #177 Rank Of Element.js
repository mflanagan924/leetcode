function rankOfElement(arr, i) {
    let before = 0;
    let after = 0;
    for (let j = 0; j < i; j++){
      if (arr[j] <= arr[i]){
        before++;
      }
    }
    for (let k = i + 1; k < arr.length; k++){
      if (arr[k] < arr[i]){
        after++;
      }
    }
    return before + after;
  }