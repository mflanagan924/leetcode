function longestWord(stringOfWords) {
    let arr = stringOfWords.split(" ");
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++){
      if (arr[i].length >= ans.length){
        ans = arr[i];
      }
    }
    return ans;
  }